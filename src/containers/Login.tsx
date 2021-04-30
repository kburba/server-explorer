import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/actions/auth.actions';
import { RootState } from '../store/configureStore';
import { UiReducerState } from '../store/types/ui.types';

export default function Login() {
  const username = process.env.REACT_APP_USERNAME;
  const password = process.env.REACT_APP_PASSWORD;
  const dispatch = useDispatch();
  const handleLoginClick = () =>
    username && password && dispatch(loginUser(username, password));

  const { isLoading, errors } = useSelector<
    RootState,
    {
      isLoading: UiReducerState['isLoading'];
      errors: UiReducerState['errors'];
    }
  >(({ uiReducer }) => ({
    isLoading: uiReducer.isLoading,
    errors: uiReducer.errors,
  }));

  const buttonTitle = isLoading.login ? 'Loading...' : 'Click gere to Log in';
  return (
    <div>
      {errors.login && <div className="errorMsg">{errors.login}</div>}
      <button type="button" onClick={handleLoginClick}>
        {buttonTitle}
      </button>
    </div>
  );
}
