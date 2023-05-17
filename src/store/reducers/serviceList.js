import uuid from "react-uuid";
import { ADD_NOTE, FILTER_SEARCH, REMOVE_NOTE, SAVE_EDIT_NOTE } from "../actions/actions";

const serviceListReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_NOTE: 
            const {title, price} = action.payload;
            return [...state, {id: uuid(), title, price: Number(price)}];
        case REMOVE_NOTE:
            const {id} = action.payload;
            return state.filter(note => note.id !== id);
        case SAVE_EDIT_NOTE:
            const all = state.filter(note => note.id !== action.payload.id);
            return [...all, action.payload];
        case FILTER_SEARCH:
            return state;
        default:
            return state;
    }
}

export default serviceListReducer;