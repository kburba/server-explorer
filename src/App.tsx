import React from 'react';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Route, Switch } from 'react-router';
import { history } from './store/configureStore';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={() => <div>Server Explorer</div>} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
