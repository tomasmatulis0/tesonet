import { useHistory } from 'react-router-dom';
import { ROUTES } from '@Config';

const useNavigation = () => {
    const history = useHistory();
    const navigateToLogin = () => history.push(ROUTES.LOGIN);
    const navigateToServersList = () => {
        history.push(ROUTES.SERVERS_LIST);
    };

    return {
        navigateToLogin,
        navigateToServersList,
    };
};

export default useNavigation;
