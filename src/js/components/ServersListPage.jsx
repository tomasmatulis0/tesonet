import React, { memo } from 'react';
import { AuthenticationManager } from '@Assets/authentication';
import { useNavigate } from '@Hooks/index';

import ServersList from './ServersList';

const ServersListPage = () => {
    const { navigateToLogin } = useNavigate();

    if (AuthenticationManager.hasToken() === false) {
        navigateToLogin();

        return null;
    }

    return <ServersList />;
};

export default memo(ServersListPage);
