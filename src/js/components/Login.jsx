import React, { memo } from 'react';
import { useLogin, useNavigate } from '@Hooks';
import { AuthenticationManager } from '@Assets/authentication';
import Loader from './Loader';

const Login = () => {
    const { navigateToServerList } = useNavigate();
    const {
        login,
        isLoading,
        errorMessage,
        updateUsername,
        updatePassword,
    } = useLogin(navigateToServerList);

    if (AuthenticationManager.hasToken()) {
        return null;
    }

    return (
        <div className="h-full border-t border-l border-r border-gray-400 px-3 py-10 bg-gray-200 flex justify-center">
            <div className="w-full max-w-xs">
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={login}
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            onChange={updateUsername}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                            onChange={updatePassword}
                            required
                        />
                    </div>
                    {errorMessage !== null && <div>{errorMessage}</div>}
                    <div className="flex justify-end">
                        <button
                            className="flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/3 h-10"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? <Loader /> : 'Log in'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default memo(Login);
