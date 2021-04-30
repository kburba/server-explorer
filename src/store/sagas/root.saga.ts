/** rootSaga.js */
import { all, fork } from 'redux-saga/effects';
import watchAuthSaga from './auth.saga';
import watchServersSaga from './servers.saga';

// import watchers from other files
export default function* rootSaga() {
  yield all([fork(watchAuthSaga), fork(watchServersSaga)]);
}
