import { combineReducers, createStore } from "redux";
import serviceListReducer from "../actions/serviceList";
import serviceAddReducer from "../actions/serviceAdd";
import serviceEditSwitchReducer from "../actions/serviceEditSwitch";

const reducers = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
    serviceEditSwitch: serviceEditSwitchReducer
})

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, reduxDevTools);
export default store;