import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

import helloSaga from './hello/sagas';

import AppState from './AppState';
import reducer from './hello/reducer';

export { default as AppState } from './AppState';
export { default as selectors } from './hello/selectors';
export * from './hello/actions';

export const createRootReducer = (history: History) => combineReducers<AppState>({
  router: connectRouter(history),
  hello: reducer,
});

export function* rootSaga() {
  yield all([fork(helloSaga)]);
}
