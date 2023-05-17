import { CHANGE_NOTE_FIELD, CLEAR, EDIT_NOTE, FILTER_INPUT } from "../actions/actions";

const initialState = {
    title: '',
    price: '',
    filterText: ''
}

const serviceInputReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NOTE_FIELD:
            const {name, value} = action.payload;
            return {...state, [name]: value};
        case CLEAR:
            return initialState;
        case EDIT_NOTE:
            state = action.payload;
            return state;
        case FILTER_INPUT:
            const {text} = action.payload;
            return {...state, filterText: text};
        default:
            return state;
    }
}

export default serviceInputReducer;