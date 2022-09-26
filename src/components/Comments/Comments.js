import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        commentsService.getAll().then(value => setComments(value.data))
    },[]);

    return (
        <div>
            {
                comments.map(comment=><Comment comment={comment} key={comment.id}/>)
            }
        </div>
    );
};

export {Comments};