export const API_SERVER_ADDRESS = "http://localhost:8080/";

export function getLoginBody(email, password) {
    return `username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&grant_type=password`;
}

export function getAuthHeader(token) {
    
}