import { ADD_NOTE, CHANGE_NOTE_FIELD, CLEAR, EDIT_NOTE, EDIT_SWITCH, REMOVE_NOTE } from "./actions";

export function addNote(title, price, id) {
    return {type: ADD_NOTE, payload: {title, price, id}};
}

export function removeNote(id) {
    return {type: REMOVE_NOTE, payload: {id}};
}

export function changeNote(name, value) {
    return {type: CHANGE_NOTE_FIELD, payload: {name, value}};
}

export function clear(name) {
    return {type: CLEAR, payload: {name}};
}

export function editNote(id, title, price) {
    return {type: EDIT_NOTE, payload: {id, title, price}};
}

export function editSwitch(valueEditSwitch) {
    return {type: EDIT_SWITCH, payload: {valueEditSwitch}};
}