import { UiReducerState, UIActions, uiActionTypes } from '../types/ui.types';

const initialState: UiReducerState = {
  isLoading: {},
  errors: {},
};

const uiReducer = (state = initialState, action: UIActions): UiReducerState => {
  switch (action.type) {
    case uiActionTypes.SET_ERROR: {
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.key]: action.payload.message,
        },
      };
    }
    case uiActionTypes.UNSET_ERRORS: {
      return {
        ...state,
        errors: {},
      };
    }
    case uiActionTypes.SET_LOADER: {
      const updatedIsLoadingState = {
        ...state.isLoading,
      };
      action.payload.forEach((param) => {
        updatedIsLoadingState[param] = true;
      });
      return {
        ...state,
        isLoading: { ...updatedIsLoadingState },
      };
    }
    case uiActionTypes.UNSET_LOADER: {
      const updatedIsLoadingState = {
        ...state.isLoading,
      };
      action.payload.forEach((param) => {
        delete updatedIsLoadingState[param];
      });
      return {
        ...state,
        isLoading: { ...updatedIsLoadingState },
      };
    }
    default:
      return state;
  }
};

export default uiReducer;
