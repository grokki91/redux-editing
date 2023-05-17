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
            dispatch(editNote(id, title, price))
        }
    }

    return (
            <div className='notes'>
                <div className='column'>
                    <span>Title</span>
                <span>Price</span>
            </div>
            <ul>
                {Array.isArray(notes) && notes.map(note => {
                    return <Note key={note.id} {...note} edit={edit} remove={remove}/>
                })}
            </ul>
        </div>
    );
}

export default Notes;
