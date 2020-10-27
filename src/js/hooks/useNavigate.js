import { useHistory } from 'react-router-dom';
import { ROUTES } from '@Config';

const useNavigation = () => {
    const history = useHistory();
    const navigateToLogin = () => history.push(ROUTES.LOGIN);
    const navigateToServerList = () => history.push(ROUTES.SERVERS_LIST);

    return {
        navigateToLogin,
        navigateToServerList,
    };
};

export default useNavigation;
