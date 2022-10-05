import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <h2>{post.id}: {post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export {Post};