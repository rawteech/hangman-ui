import { RSAA } from 'redux-api-middleware';
import config from "config";
import { LOGIN_RSAA } from '../_constants/auth.constants';


export const login = (username, password) => ({
    [RSAA]: {
        endpoint: `${config.apiUrl}/api/token/`,
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {'Content-Type': 'application/json'},
        types: LOGIN_RSAA
    }
});