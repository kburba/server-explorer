import { takeLatest, put, call } from 'redux-saga/effects';
import { AUTH_ACTIONS } from '../actions/types';
import setAuthToken from '../../utils/setAuthToken';
import { loginApi } from '../storeUtils';
import { LoginResponse, LoginUser } from '../types/auth.types';
import { push } from 'connected-react-router';
import { setError } from '../actions/ui.actions';

export function* logoutUserSaga() {
  try {
    // Remove token from local storage
    localStorage.removeItem('access_token');

    // Delete auth token
    setAuthToken(null);

    // Redirect to login
    yield put(push('/login'));
  } catch (error) {
    yield put(
      setError({
        key: 'logout',
        message: error.message,
      })
    );
  }
}

export function* loginUserSaga({ payload }: LoginUser) {
  try {
    const { username, password } = payload;
    const response: LoginResponse = yield call(loginApi, {
      username,
      password,
    });
    // // Set access token to Auth header
    setAuthToken(response.token);

    // Save to localStorage
    yield localStorage.setItem('access_token', `Bearer ${response.token}`);
    yield put(push('/'));
  } catch (error) {
    yield put(
      setError({
        key: 'login',
        message: error.data.message,
      })
    );
  }
}

export default function* watchAuthSaga() {
  yield takeLatest(AUTH_ACTIONS.LOGIN, loginUserSaga);
  yield takeLatest(AUTH_ACTIONS.LOGOUT_USER, logoutUserSaga);
}
