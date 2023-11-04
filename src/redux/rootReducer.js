import { combineReducers } from "redux";
import { loadingBarReducer } from "./reducers/loadingBarReducer";
import { alertReducer } from "./reducers/alertRecucer";
import { infoDataReducer } from "./reducers/infoDataReducer";

export const rootReducer = combineReducers({
    loadingBarProgress: loadingBarReducer,
    alertStatus: alertReducer,
    infoData: infoDataReducer
})