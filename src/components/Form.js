import React from 'react';

const Form = ({children, title, price, submit, change, placeholder=''}) => {
    return (
        <form className='form' name='notes' onSubmit={(e) => submit(e)}>
            <input type='text' name='title' value={title} onChange={(e) => change(e)} placeholder={placeholder}/>
            <input type='number' name='price' value={price} onChange={(e) => change(e)} placeholder={placeholder}/>
            <button>Save</button>
            {children}
        </form>
    );
}

export default Form;
