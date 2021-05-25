import axios from "axios";
import decodeJwt from 'jwt-decode';
import {ENDPOINT} from "../static/data";

const login = (email, password) => {
    return axios
        .post(ENDPOINT + "/auth/login", {
            email,
            password,
        })
        .then((response) => {
            const user = decodeJwt(response.data.token);
            return localStorage.setItem("user", JSON.stringify({...user, token: response.data.token}))
        });
};

const logout = (history) => {
    localStorage.removeItem("user");
    history.push('/login');
    window.location.reload();
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    login,
    logout,
    getCurrentUser,
};
