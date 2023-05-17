import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editMode, editNote, editSwitch, filterInput, filterSearch, filterSwitch, removeNote } from '../store/action-creators/actionsCreators';
import Note from './Note';

const Filter = () => {
    const {filterText} = useSelector(state => state.serviceInput);
    const {isFilter, isEditMode} = useSelector(state => state.serviceSwitch);
    const notes = useSelector(state => state.serviceList);
    const dispatch = useDispatch();

    const handleFind = (e) => {
        const {value} = e.target;
        dispatch(filterInput(value));
        dispatch(filterSearch(value))
        if (value.length && !isFilter) {
            dispatch(filterSwitch(true))
        } 
    }

    const remove = (id) => {dispatch(removeNote(id))}

    const edit = (id, title, price) => {
        dispatch(editSwitch(true));
        dispatch(editMode(true));
        if (id) {
            dispatch(editNote(id, title, price))
        }
    }

    return (
        <>
            {
                !isEditMode ?
  
                    <div className='filter-block'>
                    <label id='find'>
                        <span id='find'></span>
                        <input className='filter' value={filterText} onChange={(e) => handleFind(e)} type='text' placeholder='Find by title...'/>
                    </label>
                </div> 
                 :
                ''
            }
            {
                isFilter ?
                notes.map(note => {
                    if (note.title.includes(filterText)) {
                        return <Note {...note} key={note.id} remove={remove} edit={edit}/>
                    }
                    return '';
                }) :
                ''
            }
        </>
    );
}

export default Filter;
