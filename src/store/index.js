import { combineReducers, createStore } from "redux";
import serviceListReducer from "./reducers/serviceList";
import serviceEditSwitchReducer from "./reducers/serviceEditSwitch";
import serviceInputReducer from "./reducers/serviceInput";

const reducers = combineReducers({
    serviceList: serviceListReducer,
    serviceInput: serviceInputReducer,
    serviceEditSwitch: serviceEditSwitchReducer
})

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, reduxDevTools);
export default store;