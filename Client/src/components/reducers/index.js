import { combineReducers } from "redux";
import lakeReducer from "./lakeReducer";
import messageReducer from "./messageReducer";
import userReducer from "./userReducer";
import searchBarReducer from './searchBarReducer'

export default combineReducers({
	searchBarReducer,
	lakeReducer,
	messageReducer,
	userReducer
	
});
