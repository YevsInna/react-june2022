import React from 'react';

import {useNavigate} from "react-router";

const Comment = ({comment}) => {
    const {postId, id, name, body} = comment;
   const navigate = useNavigate();

    return (
        <div>
            <h3>Post {comment.postId} comment {comment.id}</h3>
            <p>{comment.name}</p>
            <button onClick={()=>navigate(`${id}`, {state:{...comment}})}>Comment details</button>
        </div>
    );
};

export {Comment};