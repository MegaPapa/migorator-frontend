import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { login } from './login';
import { profile } from './profile';

export default combineReducers({
    routing: routerReducer,
    login,
    profile
});