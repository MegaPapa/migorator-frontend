import axios from 'axios';
import { API_SERVER_ADDRESS, getLoginBody } from '../constants/ServerConf';

export function signInAction(email, password) {
    var body = getLoginBody(email, password); 
    var request_instance = axios.create({
        baseURL: API_SERVER_ADDRESS.concat("oauth/token"),
        headers: {'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`migorator-frontend:secret`)}
    });
    request_instance.post(API_SERVER_ADDRESS.concat("oauth/token"), body)
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });
}