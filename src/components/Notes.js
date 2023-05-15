import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editMode, editNote, editSwitch, removeNote } from '../store/action-creators/actionsCreators';
import Note from './Note';

const Notes = () => {
    const notes = useSelector(state => state.serviceList)
    const dispatch = useDispatch();
    const remove = (id) => {dispatch(removeNote(id))}

    const edit = (id, title, price) => {
        dispatch(editSwitch(true));
        dispatch(editMode(true));
        if (id) {
            console.log('мы тут');
            dispatch(editNote(id, title, price))
        }
    }

    return (
        <ul className='notes'>
            {Array.isArray(notes) && notes.map(note => {
                return <Note key={note.id} {...note} edit={edit} remove={remove}/>
            })}
        </ul>
    );
}

export default Notes;
