import React from 'react';

const Details = ({user}) => {
    let {username, email, phone, website, address} = user;
    return (
        <div>
            <p>Username - {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Telephone number:{user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Addresse: {user.address.city}, {user.address.street} street</p>
        </div>
    );
};

export default Details;