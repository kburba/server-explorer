import { AuthActions, LogoutUser } from '../types/auth.types';

import { AUTH_ACTIONS } from './types';

// Login registered user
export function loginUser(username: string, password: string): AuthActions {
  return {
    type: AUTH_ACTIONS.LOGIN,
    payload: { username, password },
  };
}

// Logout user
export function logoutUser(): LogoutUser {
  return {
    type: AUTH_ACTIONS.LOGOUT_USER,
  };
}
