import { 
    ADD_NOTE, CHANGE_NOTE_FIELD, CLEAR, EDIT_MODE, EDIT_NOTE,
    EDIT_SWITCH, FILTER_INPUT, FILTER_SEARCH, FILTER_SWITCH, REMOVE_NOTE, SAVE_EDIT_NOTE
 } from "../actions/actions";

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

export function editSwitch(isEditSwitch) {
    return {type: EDIT_SWITCH, payload: {isEditSwitch}};
}

export function editMode(isEditMode) {
    return {type: EDIT_MODE, payload: {isEditMode}};
}

export function saveEditNote(id, title, price) {
    return {type: SAVE_EDIT_NOTE, payload: {id, title, price}};
}

export function filterInput(text) {
    return {type: FILTER_INPUT, payload: {text}};
}

export function filterSearch(filterText) {
    return {type: FILTER_SEARCH, payload: {filterText}};
}

export function filterSwitch(isFilter) {
    return {type: FILTER_SWITCH, payload: {isFilter}};
}