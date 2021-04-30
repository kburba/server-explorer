import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServers } from '../../store/actions/server.actions';
import { RootState } from '../../store/configureStore';
import { ServersState } from '../../store/types/server.types';
import { UiReducerState } from '../../store/types/ui.types';
import NavBar from '../NavBar';
import ServersTable from './ServersTable';

export default function Servers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServers());
  }, [dispatch]);

  const { isLoading, errors, servers } = useSelector<
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
    <div className="container">
      <NavBar />
      <h1>Servers</h1>
      {errors.getServers && <div className="errorMsg">{errors.getServers}</div>}
      {isLoading.getServers && <div>Loading...</div>}
      {servers.length > 0 && <ServersTable servers={servers} />}
    </div>
  );
}
