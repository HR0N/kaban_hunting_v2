import {combineReducers} from "redux";
import appReducer from "./App";

export default combineReducers({
    app: appReducer,

});
