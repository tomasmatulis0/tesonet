import React, { memo } from 'react';
import { AuthenticationManager } from '@Services/authentication';
import { useNavigate, useServersList } from '@Hooks';
import logo from '@Assets/images/logo.png';
import logoutIcon from '@Assets/icons/logout.svg';
import ServersListTable from './ServersListTable';

const ServersList = () => {
    const { navigateToLogin } = useNavigate();
    const {
        serversList,
        isLoading,
        errorMessage,
    } = useServersList(AuthenticationManager.getToken());

    return (
        <div className="h-full bg-gray-200 w-full text-center">
            <div className="flex justify-between items-center p-2">
                <div className="w-1/4">
                    <img className="servers-list-logo" src={logo} alt="app logo" />
                </div>
                <div className="pr-4">
                    <button
                        type="button"
                        onClick={() => {
                            AuthenticationManager.logout();
                            navigateToLogin();
                        }}
                    >
                        <img className="mx-auto" src={logoutIcon} alt="logout logo" />
                        Logout
                    </button>
                </div>
            </div>
            <ServersListTable serversList={serversList} isLoading={isLoading} errorMessage={errorMessage} />
        </div>
    );
};

export default memo(ServersList);
