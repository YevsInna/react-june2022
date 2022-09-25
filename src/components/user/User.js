import React from 'react';

const User = ({user}) => {
    const {id,name,username,email} = user;
    return (
        <div>
            <h3>{user.id} - {user.name}</h3>
            <p>Username is {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default User;