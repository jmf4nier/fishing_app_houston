import { FETCH_MESSAGES, POST_MESSAGE} from '../actions/types'

const initialState = {
    
    messages: []
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_MESSAGES:
            return {
                ...state, 
                messages: action.payload
            };
        
        case POST_MESSAGE:
            return {
                ...state,
                messages: [ ...state.messages, action.payload ] //existing array plus new object!
                
            };
        default: 
            return state;
    }
}