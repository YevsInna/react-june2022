import React from 'react';
import {useDispatch} from "react-redux";

import {postActions} from "../../store";

const Post = ({post}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div>{post.id} - {post.title}</div>
            <div>{post.body}</div>
            <button onClick={() => dispatch(postActions.setCurrentPost(post))}>SELECT</button>
            <button onClick={() => dispatch(postActions.getById({id}))}>GET FROM API</button>
            <button onClick={() => dispatch(postActions.deleteById(id))}>DELETE</button>
        </div>
    );
};

export {Post};