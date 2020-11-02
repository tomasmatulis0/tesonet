import React, { memo } from 'react';
import { AuthenticationManager } from '@Assets/authentication';
import { useNavigate, useServersList } from '@Hooks';
import logo from '@Assets/images/logo.png';
import logoutIcon from '@Assets/icons/logout.svg';

const ServersList = () => {
    const { navigateToLogin } = useNavigate();
    const {
        serversList,
        isLoading,
        errorMessage,
    } = useServersList(AuthenticationManager.getToken());

    if (isLoading) {
        return 'Loading';
    }

    if (errorMessage !== null) {
        return errorMessage;
    }

    if (serversList === null) {
        return null;
    }

    return (
        <div className="bg-gray-200 w-full text-center">
            <div className="flex justify-between items-center p-2">
                <div className="w-1/4">
                    <img className="servers-list-logo" src={logo} alt='app logo' />
                </div>
                <div className="pr-4">
                    <button
                        type="button"
                        onClick={() => {
                            AuthenticationManager.logout();
                            navigateToLogin();
                        }}
                    >
                        <img className="mx-auto" src={logoutIcon} alt='logout logo' />
                        Logout
                    </button>
                </div>
            </div>
            <div>
                <div className="flex w-full px-2 py-2 bg-gray-600 font-bold text-white">
                    <div className="w-1/2">Server name</div>
                    <div className="w-1/2">Distance</div>
                </div>
                <div>
                    {serversList.map((server, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div className={`${index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-400'} flex w-full py-2 px-2`} key={index}>
                            <div className="w-1/2">{server.name}</div>
                            <div className="w-1/2">{server.distance}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(ServersList);
