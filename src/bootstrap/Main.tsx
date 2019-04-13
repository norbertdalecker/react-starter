import { History } from 'history';
import React from 'react';
import { hot } from 'react-hot-loader';
import { I18nextProvider } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';
import { Store } from 'redux';

import { App } from 'components/app';
import { AppState } from '../store';

import i18n from './i18n';

interface Props {
  history: History;
  store: Store<AppState>;
}

const Main: React.SFC<Props> = props => (
  <I18nextProvider i18n={i18n}>
    <ReduxProvider store={props.store}>
      <App history={props.history} />
    </ReduxProvider>
  </I18nextProvider>
);

export default hot(module)(Main);
