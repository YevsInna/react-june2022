import React from 'react';

const CommentDetails = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <h3>The selected comment refers to the post {post.id} user {post.userId}:</h3>
            <p>Title: {post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export {CommentDetails};