import { AUTH_ACTIONS } from '../actions/types';

export type AuthActions = LoginUser | LogoutUser;

export interface AuthState {
  isAuthenticated: boolean;
  errors: {
    email?: string;
    password?: string;
  };
  user: null | { exp: number };
}

export interface LoginUser {
  type: typeof AUTH_ACTIONS.LOGIN;
  payload: LoginRequest;
}

export interface LogoutUser {
  type: typeof AUTH_ACTIONS.LOGOUT_USER;
}
export interface LoginRequest {
  username: string;
  password: string;
}
export interface LoginResponse {
  token: string;
}
