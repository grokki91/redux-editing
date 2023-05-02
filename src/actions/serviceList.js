import uuid from "react-uuid";
import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE } from "./actions";

const serviceListReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_NOTE: 
            const {title, price} = action.payload;
            return [...state, {id: uuid(), title, price: Number(price)}];
        case REMOVE_NOTE:
            const {id} = action.payload;
            return state.filter(note => note.id !== id);
        case EDIT_NOTE:
            console.log(state.find(note => note.id === id));
            return state.find(note => note.id === id)
        default:
            return state;
    }
}

export default serviceListReducer;