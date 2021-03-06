import { signInAction } from '../actions/signInAction';
import { signUpAction } from '../actions/signUpAction';
import { noopAction } from '../actions/noopAction';

var initialState = {
    id: 0,
    email: "",
    username: "",
    token: ""
};

export function login(state = initialState, action) {
    if (action.type === "SIGN_IN") {
        signInAction(action.email, action.password);
        
    } else if (action.type === "SIGN_UP") {
        signUpAction(action.email, action.password);
    } else if (action.type === "NOOP") {
        noopAction();
    }
    return state;
}