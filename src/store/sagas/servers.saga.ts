import { takeLatest, put, call } from 'redux-saga/effects';
import { getServersSuccess } from '../actions/server.actions';
import { SERVERS_ACTIONS } from '../actions/types';
import {
  resetErrors,
  setError,
  setLoader,
  unsetLoader,
} from '../actions/ui.actions';
import { apiFetch } from '../storeUtils';
import { ServerType } from '../types/server.types';

export function* getServersSaga() {
  try {
    yield put(setLoader(['getServers']));
    yield put(resetErrors());
    const response: ServerType[] = yield call(apiFetch, '/v1/servers');
    yield put(getServersSuccess(response));
  } catch (error) {
    yield put(setError({ key: 'getServers', message: error.data.message }));
  } finally {
    yield put(unsetLoader(['getServers']));
  }
}

export default function* watchServersSaga() {
  yield takeLatest(SERVERS_ACTIONS.GET_SERVERS, getServersSaga);
}
