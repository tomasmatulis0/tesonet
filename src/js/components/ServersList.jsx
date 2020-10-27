import React, { memo } from 'react';
import { AuthenticationManager } from '@Assets/authentication';
import { useNavigate } from '@Hooks';

const ServersList = () => {
    const { navigateToLogin } = useNavigate();

    return (
        <div>
            Server list
            <button
                type="button"
                onClick={() => {
                    AuthenticationManager.logout();
                    navigateToLogin();
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default memo(ServersList);
