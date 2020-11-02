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
            // Todo http errors
            throw new Error(error.response.data.message);
        }
    }
}

export default new ServerListManager();
