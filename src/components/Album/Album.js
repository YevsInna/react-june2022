import React from 'react';

const Album = ({album}) => {
    const {id, userId, title} = album;

    return (
        <div>
            <h3>User {album.userId} album {album.id}</h3>
            <p>{album.title}</p>
        </div>
    );
};

export {Album};