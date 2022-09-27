import { combineReducers } from "redux";
import { homeReducer } from "../screens/ReduxScreen/reducer";

const rootReducer = combineReducers({ homeReducer: homeReducer });

export default rootReducer;
