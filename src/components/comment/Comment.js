import React from 'react';

const Comment = ({comment}) => {
    const {id, name, body} = comment;
    return (
        <div>
            <h3>Comment {comment.id}</h3>
            <p>{comment.name}</p>
            <p>{comment.body}</p>
        </div>
    );
};

export default Comment;