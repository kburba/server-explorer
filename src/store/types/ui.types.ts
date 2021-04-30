export enum uiActionTypes {
  SET_LOADER = 'SET_LOADER',
  UNSET_LOADER = 'UNSET_LOADER',
  SET_ERROR = 'SET_ERROR',
  UNSET_ERRORS = 'UNSET_ERRORS',
}
export type ErrorType = { key: UIErrors; message: string };
export interface SetError {
  type: typeof uiActionTypes.SET_ERROR;
  payload: ErrorType;
}

export interface ResetErrors {
  type: typeof uiActionTypes.UNSET_ERRORS;
}

export interface SetLoader {
  type: typeof uiActionTypes.SET_LOADER;
  payload: UILoaders[];
}

export interface UnsetLoader {
  type: typeof uiActionTypes.UNSET_LOADER;
  payload: UILoaders[];
}

export type UILoaders = keyof loaders;
export type UIErrors = keyof errors;

export type UIActions = SetLoader | UnsetLoader | SetError | ResetErrors;

export interface UiReducerState {
  isLoading: Partial<loaders>;
  errors: Partial<errors>;
}

type errors = {
  getServers: string;
  getAccessToken: string;
  logout: string;
  login: string;
};
type loaders = {
  getServers: boolean;
  getAccessToken: boolean;
  login: boolean;
};
