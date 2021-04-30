/** rootSaga.js */
import { all, fork } from 'redux-saga/effects';
import watchAuthSaga from './authSaga';

// import watchers from other files
export default function* rootSaga() {
  yield all([fork(watchAuthSaga)]);
}

export type RootState = ReturnType<typeof rootSaga>;
