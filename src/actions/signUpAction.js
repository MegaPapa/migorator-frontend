import axios from 'axios';
import { API_SERVER_ADDRESS } from '../constants/ServerConf';

export function signUpAction(userEmail, userPassword) {
    var user = {
        email : userEmail,
        password : userPassword
    }
    axios.post(API_SERVER_ADDRESS.concat("signup"), user)
    .then(function(response) {
        if (response.status == 200) {
            console.log(response);
        }
    })
    .catch(function(error) {
        console.log(error);
    });
}