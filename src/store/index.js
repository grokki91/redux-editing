import { combineReducers, createStore } from "redux";
import serviceListReducer from "./reducers/serviceList";
import serviceInputReducer from "./reducers/serviceInput";
import serviceSwitchReducer from "./reducers/serviceEditSwitch";

const reducers = combineReducers({
    serviceList: serviceListReducer,
    serviceInput: serviceInputReducer,
    serviceSwitch: serviceSwitchReducer
})

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, reduxDevTools);
export default store;