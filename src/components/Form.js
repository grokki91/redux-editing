import React from 'react';
import { useSelector } from 'react-redux';

const Form = ({children, title, price, submit, change}) => {
    const {isEditMode} = useSelector(state => state.serviceEditSwitch);
    const state = useSelector(state => state.serviceInput);

    if (isEditMode) {
        return(
            <form className='form' name='notes' onSubmit={(e) => submit(e)}>
                <input type='text' name='title' value={state.title} onChange={(e) => change(e)} />
                <input type='number' name='price' value={state.price} onChange={(e) => change(e)} />
                <button>Save</button>
                {children}
            </form>
        );    
    } else {
        return(
            <form className='form' name='notes' onSubmit={(e) => submit(e)}>
                <input type='text' name='title' value={title} onChange={(e) => change(e)} />
                <input type='number' name='price' value={price} onChange={(e) => change(e)} />
                <button>Save</button>
                {children}
            </form>
        )
    }
}

export default Form;
