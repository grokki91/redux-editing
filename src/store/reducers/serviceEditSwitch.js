import { EDIT_MODE, EDIT_SWITCH } from "../actions/actions";

const initialState = {
    isEditSwitch: false,
    isEditMode: false,
}

const serviceEditSwitchReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_SWITCH:
            return {...state, isEditSwitch: !state.isEditSwitch}
        case EDIT_MODE:
            return {...state, isEditMode: !state.isEditMode}
        default:
            return state;
    }
}

export default serviceEditSwitchReducer;