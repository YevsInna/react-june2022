import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <h2>{user.id} - {user.name} ({user.username})</h2>
        </div>
    );
};

export {User};