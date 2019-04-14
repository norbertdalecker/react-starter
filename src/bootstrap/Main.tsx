import { History } from 'history';
import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader';
import { Provider as ReduxProvider } from 'react-redux';
import { Store } from 'redux';

import { App } from 'hoc/app';
import { AppState } from '../store';

import './i18n';

interface Props {
  history: History;
  store: Store<AppState>;
}

const Main: React.SFC<Props> = props => (
    <Suspense fallback="loading">
      <ReduxProvider store={props.store}>
        <App history={props.history} />
      </ReduxProvider>
    </Suspense>
);

export default hot(module)(Main);
