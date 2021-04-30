import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import serversReducer from './servers.reducer';
import uiReducer from './ui.reducer';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    serversReducer,
    uiReducer,
  });

export default createRootReducer;
