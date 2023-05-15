import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './Form';
import { addNote, changeNote, clear } from '../store/action-creators/actionsCreators';

const Add = () => {
    const note = useSelector(state => state.serviceInput);
    const notes = useSelector(state => state.serviceList)
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(changeNote(name, value))
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        if (note.title && note.price) {
            dispatch(addNote(note.title, note.price));
            dispatch(clear(e.target.name));
        }
    }

    return (
        <Form {...note} notes={notes} submit={handleSumbit} change={handleChange} />
    );
}

export default Add;
