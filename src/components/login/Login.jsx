import React, { memo } from 'react';
import { useLogin, useNavigate } from '@Hooks';
import logo from '@Assets/images/logo.png';
import userIcon from '@Assets/icons/user.svg';
import passwordIcon from '@Assets/icons/password.svg';
import ErrorAlert from '../ErrorAlert';
import LoginButton from './LoginButton';
import InputField from './InputField';

const Login = () => {
    const { navigateToServersList } = useNavigate();
    const {
        login,
        username,
        password,
        isLoading,
        errorMessage,
        userNameValid,
        passwordValid,
        updateUsername,
        updatePassword,
    } = useLogin(navigateToServersList);

    return (
        <div className="h-full border-t border-l border-r border-gray-400 px-3 py-10 bg-gray-200 flex justify-center login-container">
            <div className="max-w-xs">
                <img src={logo} alt='app logo' />
                <form className="pb-2" onSubmit={login}>
                    <InputField
                        id="username"
                        type="text"
                        placeholder="Username"
                        onChange={updateUsername}
                        value={username}
                        required
                        iconOptions={{
                            icon: userIcon,
                            altText: 'User icon',
                        }}
                        validationError={!userNameValid ? 'Username can be only letters or numbers' : null}
                    />
                    <InputField
                        id="password"
                        type="password"
                        placeholder="******************"
                        onChange={updatePassword}
                        value={password}
                        required
                        iconOptions={{
                            icon: passwordIcon,
                            altText: 'Password icon',
                        }}
                        validationError={!passwordValid ? 'Password cannot contain spaces' : null}
                    />
                    <LoginButton isLoading={isLoading} />
                </form>
                {errorMessage !== null && <ErrorAlert text={errorMessage} />}
            </div>
        </div>
    );
};

export default memo(Login);
