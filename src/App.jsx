import React, { memo } from 'react';
import {
    Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import { Login, ServersListPage } from '@Components';
import { ROUTES } from '@Config';
import { AuthenticationManager, AUTHENTICATION_TOKEN } from '@Services/authentication';
import { store } from '@Store';

const history = createBrowserHistory();
window.addEventListener(
    'storage',
    (event) => {
        if (event.storageArea === localStorage && event.key === AUTHENTICATION_TOKEN) {
            history.push(ROUTES.LOGIN);
        }
    },
);

const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path={ROUTES.LOGIN} component={Login} />
                <Route path={ROUTES.SERVERS_LIST} component={ServersListPage} />
                <Route path={ROUTES.OTHER}>
                    <Redirect to={AuthenticationManager.hasToken() ? ROUTES.SERVERS_LIST : ROUTES.LOGIN} />
                </Route>
            </Switch>
        </Router>
    </Provider>
);

export default memo(App);
