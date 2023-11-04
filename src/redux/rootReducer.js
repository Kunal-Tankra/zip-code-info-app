import { combineReducers } from "redux";
import { loadingBarReducer } from "./reducers/loadingBarReducer";
import { alertReducer } from "./reducers/alertRecucer";

export const rootReducer = combineReducers({
    loadingBarProgress: loadingBarReducer,
    alertStatus: alertReducer
})