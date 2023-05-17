import React from 'react';

const Note = ({id, title, price, edit, remove}) => {

    return (
        <li className='note'>
            <span className='title'>{title}</span>
            <span className='price'>{price}</span>
            <span className='btns'>
                <button onClick={() => edit(id, title, price)}>&#9998;</button>
                <button onClick={() => remove(id)}>&times;</button>
            </span>
        </li>
    );
}

export default Note;
