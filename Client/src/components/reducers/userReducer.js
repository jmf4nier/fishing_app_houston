import { POST_USER, LOGIN_USER, SHOW_LOGIN, SHOW_SIGNUP } from '../actions/types'

const initialState = {
    currentUser: '',
    token: '',
    showLogin: false,
    showSignup: false,
}

export default function(state = initialState, action){
    switch(action.type){
        case POST_USER:
            return {
                ...state, 
                currentUser: action.payload
            };
        case LOGIN_USER:
            return {
                ...state, 
                currentUser: action.payload
            };
        case SHOW_LOGIN:
            return {
                ...state, 
                showLogin: action.payload
            };
        case SHOW_SIGNUP:
            return {
                ...state, 
                showSignup: action.payload
            };
        default: 
            return state;
    }
}