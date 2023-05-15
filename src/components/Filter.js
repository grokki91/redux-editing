import React from 'react';

const Filter = () => {
    return (
        <div>
            <select>
                <option disabled>Filter by</option>
                <option value={1}>Title</option>
                <option value={1}>Price</option>
            </select>
        </div>
    );
}

export default Filter;
