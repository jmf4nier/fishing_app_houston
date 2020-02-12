import { combineReducers } from "redux";
import lakeReducer from "./lakeReducer";
import messageReducer from "./messageReducer";
import userReducer from "./userReducer";

export default combineReducers({
	lakeReducer,
	messageReducer,
	userReducer
	
});
