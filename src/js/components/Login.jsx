import React, { Fragment, memo } from 'react';
import { useLogin, useNavigate } from '@Hooks';
import { AuthenticationManager } from '@Assets/authentication';

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
        <Fragment>
            <div>Login</div>
            <form onSubmit={login}>
                <label htmlFor="username">
                    Username:
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={updateUsername}
                        required
                    />
                </label>
                <label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={updatePassword}
                        required
                    />
                </label>
                <button type="submit" disabled={isLoading}>Login</button>
            </form>
            {errorMessage !== null && <div>{errorMessage}</div>}
        </Fragment>
    );
};

export default memo(Login);
