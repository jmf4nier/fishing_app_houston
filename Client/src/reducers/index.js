import { combineReducers } from 'redux';
import lakeReducer from './lakeReducer';
import messageReducer from './messageReducer'

export default combineReducers({
    lakeReducer, messageReducer
   
})