import React from 'react';

const Note = ({id, title, price, edit, remove}) => {

    return (
        <li>
            {title} {price}
            <button onClick={() => edit(id, title, price)}>&#9998;</button>
            <button onClick={() => remove(id)}>&times;</button>
        </li>
    );
}

export default Note;
