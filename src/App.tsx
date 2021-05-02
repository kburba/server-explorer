import React from 'react';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Route, Switch } from 'react-router';
import { history } from './store/configureStore';
import Login from './containers/Login';
import Servers from './containers/servers/Servers';
import './styles/_index.scss';
import Logout from './containers/Logout';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/" component={Servers} exact />
        <Route component={() => <div>Route Not Found</div>} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
