import { SERVERS_ACTIONS } from '../actions/types';
import { ServerActions, ServersState } from '../types/server.types';

export const initialState: ServersState = {
  servers: [],
};

const serversReducer = (
  state = initialState,
  action: ServerActions
): ServersState => {
  switch (action.type) {
    case SERVERS_ACTIONS.GET_SERVERS_SUCCESS:
      return {
        ...state,
        servers: action.payload,
      };
    default:
      return state;
  }
};

export default serversReducer;
