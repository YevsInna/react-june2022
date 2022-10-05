import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <h2>{comment.id}: {comment.name}</h2>
            <p>{comment.body}</p>
        </div>
    );
};

export {Comment};