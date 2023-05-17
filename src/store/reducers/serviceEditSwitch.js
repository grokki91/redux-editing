import { EDIT_MODE, EDIT_SWITCH, FILTER_SWITCH } from "../actions/actions";

const initialState = {
    isEditSwitch: false,
    isEditMode: false,
    isFilter: false
}

const serviceSwitchReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_SWITCH:
            return {...state, isEditSwitch: !state.isEditSwitch}
        case EDIT_MODE:
            return {...state, isEditMode: !state.isEditMode}
        case FILTER_SWITCH:
            return {...state, isFilter: !state.isFilter}
        default:
            return state;
    }
}

export default serviceSwitchReducer;