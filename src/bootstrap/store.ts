import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import { createRootReducer, rootSaga } from '../store';

class Store {
  history: History;
  sagaMiddleware: SagaMiddleware;

  constructor(history: History) {
    this.history = history;
    this.sagaMiddleware = createSagaMiddleware();
  }

  private getEnhancer() {
    return composeWithDevTools(
      applyMiddleware(routerMiddleware(this.history), this.sagaMiddleware),
    );
  }

  getRootReducer() {
    return createRootReducer(this.history);
  }

  getSagaMiddleware() {
    return this.sagaMiddleware;
  }

  getStore() {
    return createStore(this.getRootReducer(), this.getEnhancer());
  }
}

export default (history: History) => {
  const storeHelper = new Store(history);

  const store = storeHelper.getStore();
  const sagaMiddleware = storeHelper.getSagaMiddleware();

  sagaMiddleware.run(rootSaga);

  return store;
};
