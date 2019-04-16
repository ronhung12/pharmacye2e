import axios from 'axios';
import qs from 'qs';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const URL = 'http://localhost:8080';

export const login = (user, cb) => {

    const loginPromise = axios.post(`${URL}/login`,qs.stringify(user),
        {withCredentials: true})
        .then(res => {
            console.log(res);
            if (res.data.success) {
                cb(res);
            }
            return {
                success: true,
                user: res.data.user
            };
        })
        .catch();
    return {
        type: LOGIN,
        payload: loginPromise
    };
};

export const logout = (cb) => {
    const logoutPromise = axios.post(`${URL}/logout`, {withCredentials: true})
        .then(res => {
            cb(res);
            return res;
        });
    return {
        type: LOGOUT,
        payload: logoutPromise
    }
};
