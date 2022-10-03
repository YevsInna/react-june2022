import React from 'react';

const Dog = ({dog, deleteDog}) => {
    return (
        <div>
            <h2>{dog}</h2>
            <button onClick={()=>deleteDog(dog)}>Delete dog</button>
        </div>
    );
};

export {Dog};