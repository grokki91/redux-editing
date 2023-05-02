import { CHANGE_NOTE_FIELD, CLEAR } from "./actions";

const initialState = {
    title: '',
    price: '',
}

const serviceAddReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NOTE_FIELD:
            const {name, value} = action.payload;
            return {...state, [name]: value};
        case CLEAR:
            return initialState;
        default:
            return state;
    }
}

export default serviceAddReducer;