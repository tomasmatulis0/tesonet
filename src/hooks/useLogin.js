import { useState, useEffect } from 'react';
import { AuthenticationManager } from '@Services/authentication';
import { isUserNameValid, isPasswordValid } from '@Services';

const wait = () => new Promise(resolve => setTimeout(() => resolve(), 1000));
const updaterFactory = (validator, setValid, setValue) => (event) => {
    const text = event.target.value;
    if (validator(text)) {
        setValid(true);
        setValue(text);
    } else {
        setValid(false);
    }
};

const useLogin = (onSuccess) => {
    const afterLogin = () => {
        if (AuthenticationManager.hasToken()) {
            onSuccess();
        }
    };
    useEffect(() => {
        afterLogin();
    }, []);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [userNameValid, setUserNameValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);

    const updateUsername = updaterFactory(isUserNameValid, setUserNameValid, setUsername);
    const updatePassword = updaterFactory(isPasswordValid, setPasswordValid, setPassword);

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
        username,
        password,
        isLoading,
        errorMessage,
        userNameValid,
        passwordValid,
        updateUsername,
        updatePassword,
    };
};

export default useLogin;
