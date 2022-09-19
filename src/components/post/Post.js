import React from 'react';

import '../style.css'

const Post = ({post}) => {
    const {id, title, body} = post;

    return (
        <div className="post">

            <h3>Post {post.id}</h3>
            <p>{post.title}</p>
            <p>{post.body}</p>


        </div>
    );
};

export default Post;