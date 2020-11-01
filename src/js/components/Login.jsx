import React, { memo } from 'react';
import { useLogin, useNavigate } from '@Hooks';
import logo from '@Assets/images/logo.png';
import userIcon from '@Assets/icons/user.svg';
import passwordIcon from '@Assets/icons/password.svg';
import Loader from './Loader';
import ErrorAlert from './ErrorAlert';

const Login = () => {
    const { navigateToServersList } = useNavigate();
    const {
        login,
        isLoading,
        errorMessage,
        updateUsername,
        updatePassword,
    } = useLogin(navigateToServersList);

    return (
        <div className="h-full border-t border-l border-r border-gray-400 px-3 py-10 bg-gray-200 flex justify-center login-container">
            <div className="max-w-xs">
                <img src={logo} alt='app logo' />
                <form className="pb-2" onSubmit={login}>
                    <div className="relative mb-4">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <img className="" src={userIcon} alt="User icon" />
                        </span>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 pl-10 text-gray-700 leading-9 focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            onChange={updateUsername}
                            required
                        />
                    </div>
                    <div className="relative mb-6">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <img className="" src={passwordIcon} alt="User icon" />
                        </span>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 pl-10 text-gray-700 leading-9 focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                            onChange={updatePassword}
                            required
                        />
                    </div>
                    <div className="">
                        <button
                            className="flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full h-10"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? <Loader /> : 'Log in'}
                        </button>
                    </div>
                </form>
                {errorMessage !== null && <ErrorAlert text={errorMessage} />}
            </div>
        </div>
    );
};

export default memo(Login);
