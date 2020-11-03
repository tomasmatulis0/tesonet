import axios from 'axios';
import { AUTHENTICATION_TOKEN, URL } from './config';

class AuthenticationManager {
    async login(username, password) {
        const config = {
            method: 'post',
            url: URL,
            data: {
                username,
                password,
            },
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await axios(config);
            localStorage.setItem(AUTHENTICATION_TOKEN, response.data.token);
        } catch (error) {
            const errorMessage = error?.response?.data?.message ?? 'Unexpected Error!';
            throw new Error(errorMessage);
        }
    }

    logout() {
        localStorage.removeItem(AUTHENTICATION_TOKEN);
    }

    hasToken() {
        return localStorage.getItem(AUTHENTICATION_TOKEN) !== null;
    }

    getToken() {
        return localStorage.getItem(AUTHENTICATION_TOKEN);
    }
}

export default new AuthenticationManager();
