import { loadUserData } from '../actions/profile_actions/initProfileAction';

var initialState = {
    id: 0,
    email: "",
    username: "",
    token: ""
};

export function profile(state = initialState, action) {
    if (action.state === "INIT_PROFILE") {
        loadUserData();
    }
    return state;
}