import React from 'react';
import Form from './Form';
import { useDispatch, useSelector } from 'react-redux';
import { changeNote, editNote, editSwitch } from '../actions/actionsCreators';

const Edit = () => {
    // const valueEditSwitch = useSelector(state => state.serviceEditSwitch)
    const note = useSelector(state => state.serviceAdd);
    const currentValue = useSelector(state => state.serviceList)
    // console.log(currentValue, '- component Edit');
    const dispatch = useDispatch();

    const handleCancel = () => dispatch(editSwitch(false));

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(changeNote(name, value))
    }

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(editNote(currentValue.id, currentValue.title, currentValue.price));
        handleCancel();
    }

    

    return (
        <Form {...note} submit={handleSave} change={handleChange}>
            <button onClick={() => handleCancel()}>Cancel</button>
        </Form>
    );
}

export default Edit;
