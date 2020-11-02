import axios from 'axios';
import { URL } from './config';

class ServerListManager {
    async getList(token) {
        const config = {
            method: 'get',
            url: URL,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            const errorMessage = error?.response?.data?.message ?? 'Unexpected Error!';
            throw new Error(errorMessage);
        }
    }
}

export default new ServerListManager();
