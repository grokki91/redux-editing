import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editSwitch, removeNote } from '../actions/actionsCreators';

const Notes = () => {
    const notes = useSelector(state => state.serviceList)
    const dispatch = useDispatch();
    const remove = (id) => { dispatch(removeNote(id))}
    const edit = () => { dispatch(editSwitch(true))}

    return (
        <ul className='notes'>
            {notes.map(note => {
                return(
                    <li key={note.id}>
                        {note.title} {note.price}
                        <button onClick={() => edit()}>&#9998;</button>
                        <button onClick={() => remove(note.id)}>&times;</button>
                    </li>
                );
            })}
        </ul>
    );
}

export default Notes;
