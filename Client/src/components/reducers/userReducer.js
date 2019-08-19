import { POST_USER, LOGIN_USER } from '../actions/types'

const initialState = {
    currentUser: '',
    token: '',
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
        default: 
            return state;
    }
}