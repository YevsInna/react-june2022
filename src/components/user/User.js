import React from 'react';

const User = (props) => {
    const {user, lift} = props;

    return (
        <div>
            <h2>{user.id} - {user.name}</h2>
            <button onClick={()=>{
                lift(user)
            }}>Details</button>
        </div>
    );
};

export default User;