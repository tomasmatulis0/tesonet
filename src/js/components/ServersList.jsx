import React, { memo } from 'react';
import { AuthenticationManager } from '@Assets/authentication';
import { useNavigate, useServersList } from '@Hooks';

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
        <div className="bg-gray-200 h-full w-full text-center pt-10">
            <h1 className="">Server list</h1>
            <button
                type="button"
                onClick={() => {
                    AuthenticationManager.logout();
                    navigateToLogin();
                }}
            >
                Logout
            </button>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Server name</th>
                        <th className="px-4 py-2">Distance</th>
                    </tr>
                </thead>
                <tbody>
                    {serversList.map((server, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <tr key={index}>
                            <td className="border px-4 py-2">{server.name}</td>
                            <td className="border px-4 py-2">{server.distance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default memo(ServersList);
