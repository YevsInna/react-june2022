import React from 'react';

import '../style.css'

const User = ({user, getUserId}) => {

    return (
        <div className="card">
            <h2>{user.id} - {user.name}</h2>
            <h3>Username - {user.username}</h3>
            <h3>Email: {user.email}</h3>
            <h3>Telephone number: {user.phone}</h3>
            <h3>Website: {user.website}</h3>
            <button className="button" onClick={
                ()=>getUserId(user.id)
            }>Posts of user</button>
        </div>
    );
};

export default User;