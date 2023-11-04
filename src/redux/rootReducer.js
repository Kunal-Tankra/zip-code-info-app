import { combineReducers } from "redux";
import { loadingBarReducer } from "./reducers/loadingBarReducer";

export const rootReducer = combineReducers({
    loadingBarProgress: loadingBarReducer
})