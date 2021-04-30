import {
  GetServers,
  GetServersSuccess,
  ServerType,
} from '../types/server.types';
import { SERVERS_ACTIONS } from './types';

export function getServers(): GetServers {
  return {
    type: SERVERS_ACTIONS.GET_SERVERS,
  };
}

export function getServersSuccess(servers: ServerType[]): GetServersSuccess {
  return {
    type: SERVERS_ACTIONS.GET_SERVERS_SUCCESS,
    payload: servers,
  };
}
