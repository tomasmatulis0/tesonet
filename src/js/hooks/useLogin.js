import { useState, useEffect } from 'react';
import { AuthenticationManager } from '@Assets/authentication';

const wait = () => new Promise(resolve => setTimeout(() => resolve(), 1000));

const useLogin = (onSuccess) => {
    const afterLogin = () => {
        if (AuthenticationManager.hasToken()) {
            onSuccess();
        }
    };
    useEffect(() => {
        afterLogin();
    }, []);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const updateUsername = event => setUsername(event.target.value);
    const updatePassword = event => setPassword(event.target.value);

    const login = async (event) => {
        event.preventDefault();

        setIsLoading(true);
        setErrorMessage(null);

        await wait();

        try {
            setErrorMessage(null);
            await AuthenticationManager.login(username, password);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setIsLoading(false);
            afterLogin();
        }
    };

    return {
        login,
        isLoading,
        errorMessage,
        updateUsername,
        updatePassword,
    };
};

export default useLogin;
