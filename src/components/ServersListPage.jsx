import React, { memo } from 'react';
import { AuthenticationManager } from '@Services/authentication';
import { useNavigate } from '@Hooks';

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
