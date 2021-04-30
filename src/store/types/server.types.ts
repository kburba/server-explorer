import { SERVERS_ACTIONS } from '../actions/types';

export type ServersState = {
  servers: ServerType[];
};

export type ServerActions = GetServers | GetServersSuccess;

export interface GetServers {
  type: typeof SERVERS_ACTIONS.GET_SERVERS;
}

export interface GetServersSuccess {
  type: typeof SERVERS_ACTIONS.GET_SERVERS_SUCCESS;
  payload: ServerType[];
}

export type ServerType = {
  name: string;
  distance: number;
};
