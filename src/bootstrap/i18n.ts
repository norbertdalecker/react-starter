import i18n from 'i18next';
import XHR, { I18NextXhrBackend } from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

const defaultLanguage = 'en-US';

i18n.use(initReactI18next).use(XHR).init({
  lng: defaultLanguage,
  backend: {
    loadPath: '{{lng}}/{{ns}}',
    parse: (data: string) => data,
    ajax: (url: string, _options: I18NextXhrBackend.BackendOptions, callback: I18NextXhrBackend.AjaxRequestCallback) => {
      import(/* webpackPrefetch: true */ `assets/translations/${url}.json`)
        .then((locale) => {
          callback(locale, { status: 200 } as XMLHttpRequest);
        })
        .catch(() => {
          callback('', { status: 404 } as XMLHttpRequest);
        });
    },
  },
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
    bindStore: false,
    bindI18n: 'languageChanged',
  },
});

export default i18n;
