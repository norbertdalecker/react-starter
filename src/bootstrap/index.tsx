import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Main';
import configureStore from './store';

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(<Main history={history} store={store} />, document.querySelector('#root'));
