import { EDIT_SWITCH } from "./actions";

const initialState = {
    valueEditSwitch: false
}

const serviceEditSwitchReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_SWITCH:
            return {...state, valueEditSwitch: !state.valueEditSwitch}
        default:
            return state;
    }
}

export default serviceEditSwitchReducer;