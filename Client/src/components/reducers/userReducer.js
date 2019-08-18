import { POST_USER } from '../actions/types'

const initialState = {
    currentUser: '',
}

export default function(state = initialState, action){
    switch(action.type){
        case POST_USER:
            return {
                ...state, 
                currentUser: action.payload
            };
        default: 
            return state;
    }
}