import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { getServersSuccess } from '../store/actions/server.actions';
import {
  resetErrors,
  setLoader,
  unsetLoader,
} from '../store/actions/ui.actions';
import serversReducer, {
  initialState,
} from '../store/reducers/servers.reducer';
import { apiFetch } from '../store/storeUtils';
import { ServerType } from '../store/types/server.types';
import { getServersSaga } from '../store/sagas/servers.saga';

describe('servers sagas', () => {
  it('should run getServersSaga', () => {
    const saga = getServersSaga;
    const reducer = serversReducer;
    const testServers: ServerType[] = [
      {
        distance: 123,
        name: 'test server',
      },
    ];

    return expectSaga(saga)
      .withReducer(reducer, initialState)
      .put(setLoader(['getServers']))
      .put(resetErrors())
      .provide([[matchers.call.fn(apiFetch), testServers]])
      .put(getServersSuccess(testServers))
      .put(unsetLoader(['getServers']))
      .hasFinalState({ ...initialState, servers: testServers })
      .run();
  });
});
