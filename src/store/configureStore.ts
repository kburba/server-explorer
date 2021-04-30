import {
  applyMiddleware,
  compose,
  createStore,
  StoreEnhancer,
  Store,
} from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory, History } from 'history';

import monitorReducersEnhancer from './monitorReducer';
import loggerMiddleware from './logger';
import sagas from './sagas/rootSaga';
import createRootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
export const history: History = createBrowserHistory();
const rootReducer = createRootReducer(history);

export default function configureStore(): Store {
  const middlewares = [
    loggerMiddleware,
    thunkMiddleware,
    sagaMiddleware,
    routerMiddleware(history),
  ];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composeEnhancers =
    (window as Window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composedEnhancers: StoreEnhancer = composeEnhancers(...enhancers);

  const store = createStore(rootReducer, {}, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  sagaMiddleware.run(sagas);

  return store;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
