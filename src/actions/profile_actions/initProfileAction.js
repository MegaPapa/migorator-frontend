import cookie from 'react-cookies';
import axios from 'axios';
import { API_SERVER_ADDRESS } from '../constants/ServerConf';

export function loadUserData() {
    var email = cookie.load("email");
    //'Authorization': `Bearer ${this.token}`
    var token = cookie.load("token");
    var request_instance = axios.create({
        baseURL: API_SERVER_ADDRESS.concat("/profile-get-token/").concat(email),
        headers: {'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + token}
    });
    request_instance.get(API_SERVER_ADDRESS.concat("/profile-get-token/").concat(email))
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });
}