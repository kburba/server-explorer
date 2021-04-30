import React from 'react';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Route, Switch } from 'react-router';
import { history } from './store/configureStore';
import Login from './containers/Login';
import Servers from './containers/Servers';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Servers} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
