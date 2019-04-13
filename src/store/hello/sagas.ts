import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes, fetchSuccess } from './actions';
import { Hello } from './model';

// load user unless it is cached
function* handleFetch() {
  const hello: Hello[] = [{ message: 'Hi!' }, { message: 'Again!' }];

  yield put(fetchSuccess(hello));

}

function* watchFetchRequest() {
  yield takeEvery(ActionTypes.LIST_REQUEST, handleFetch);
}

function* jobSaga() {
  yield all([fork(watchFetchRequest)]);
}

export default jobSaga;
