import React from 'react';

const User = ({user}) => {
    const {id,name,username,email,company, phone} = user;
    return (
        <div>
            <h3>{user.id} - {user.name}</h3>
        </div>
    );
};

export default User;