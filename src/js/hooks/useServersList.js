import { useState, useEffect } from 'react';
import { ServerListManager } from '@Assets/server-list';

const useServersList = (token) => {
    const [serversList, setServersList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setErrorMessage(null);
                const result = await ServerListManager.getList(token);
                setServersList(result);
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    return {
        serversList,
        isLoading,
        errorMessage,
    };
};

export default useServersList;
