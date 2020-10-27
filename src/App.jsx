import React, { memo } from 'react';
import {
    Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Login, ServersList } from '@Components';
import { ROUTES } from '@Config';
import { AuthenticationManager } from '@Assets/authentication';

const App = () => {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <Switch>
                <Route path={ROUTES.LOGIN} component={Login} />
                <Route path={ROUTES.SERVERS_LIST} component={ServersList} />
                <Route path={ROUTES.OTHER}>
                    <Redirect to={AuthenticationManager.hasToken() ? ROUTES.SERVERS_LIST : ROUTES.LOGIN} />
                </Route>
            </Switch>
        </Router>
    );
};

export default memo(App);
