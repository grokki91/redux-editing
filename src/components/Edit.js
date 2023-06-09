import React from 'react';
import Form from './Form';
import { useDispatch, useSelector } from 'react-redux';
import { changeNote, clear, editMode, editSwitch, saveEditNote } from '../store/action-creators/actionsCreators';

const Edit = () => {
    const note = useSelector(state => state.serviceInput);
    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(editSwitch(false));
        dispatch(clear(note.title));
        dispatch(editMode(true));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(changeNote(name, value))
    }

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(saveEditNote(note.id, note.title, note.price));
        handleCancel()
    }

    return (
        <Form {...note} submit={handleSave} change={handleChange}>
            <button onClick={() => handleCancel()}>Cancel</button>
        </Form>
    );
}

export default Edit;
