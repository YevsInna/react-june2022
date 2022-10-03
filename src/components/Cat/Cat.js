import React from 'react';

const Cat = ({cat, deleteCat}) => {
    return (
        <div>
            <h2>{cat}</h2>
            <button onClick={()=>deleteCat(cat)}>Delete cat</button>
        </div>
    );
};

export {Cat};