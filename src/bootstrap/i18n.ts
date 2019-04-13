import i18next from 'i18next';
import i18nextXhrBackend, { AjaxRequestCallback, BackendOptions } from 'i18next-xhr-backend';

const defaultLanguage = 'en-US';

const i18n = i18next.use(i18nextXhrBackend).init({
  lng: defaultLanguage,
  backend: {
    loadPath: '{{lng}}/{{ns}}',
    parse: (data: string) => data,
    ajax: (url: string, _options: BackendOptions, callback: AjaxRequestCallback) => {
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
