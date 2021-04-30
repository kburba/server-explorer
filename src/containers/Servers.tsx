import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServers } from '../store/actions/server.actions';
import { RootState } from '../store/configureStore';
import { ServersState } from '../store/types/server.types';
import { UiReducerState } from '../store/types/ui.types';

export default function Servers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServers());
  }, [dispatch]);

  const { isLoading, errors } = useSelector<
    RootState,
    {
      isLoading: UiReducerState['isLoading'];
      errors: UiReducerState['errors'];
      servers: ServersState['servers'];
    }
  >(({ uiReducer, serversReducer }) => ({
    isLoading: uiReducer.isLoading,
    errors: uiReducer.errors,
    servers: serversReducer.servers,
  }));

  return (
    <div>
      {errors.getServers && <div className="errorMsg">{errors.getServers}</div>}
      {isLoading.getServers && <div>Loading...</div>}
    </div>
  );
}
