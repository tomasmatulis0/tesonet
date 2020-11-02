import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ServerListManager } from '@Assets/server-list';

import { setServerList } from '../store/actions';

const useServersList = (token) => {
    const dispatch = useDispatch();
    const serversList = useSelector(state => state.servers);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setErrorMessage(null);
                const result = await ServerListManager.getList(token);
                dispatch(setServerList(result));
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
