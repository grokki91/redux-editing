import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, changeNote, clear } from '../actions/actionsCreators';
import Form from './Form';

const Add = () => {
    const note = useSelector(state => state.serviceAdd);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(changeNote(name, value))
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(addNote(note.title, note.price));
        dispatch(clear(e.target.name));
    }

    return (
        <Form {...note} submit={handleSumbit} change={handleChange}/>
    );
}

export default Add;
