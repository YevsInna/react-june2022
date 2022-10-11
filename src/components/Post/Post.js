import React from 'react';
import {useDispatch} from "react-redux";

import {postActions} from "../../store";

const Post = ({post}) => {
    const {id, title, body}= post;
    const dispatch = useDispatch();
    return (
        <div>
            <div>{id} - {title}</div>
            <div>{body}</div>
            <button onClick={() => dispatch(postActions.setCurrentPost(post))}>SELECT</button>
            <button onClick={() => dispatch(postActions.getById(post))}>GET FROM API</button>
            <button onClick={() => dispatch(postActions.deleteById({id}))}>DELETE</button>
        </div>
    );
};

export {Post};