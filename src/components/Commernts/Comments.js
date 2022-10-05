import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {commentService} from "../../services/comment.service";
import {LOAD_COMMENTS} from "../../actions";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const commentsState = useSelector(state => state.commentReducer);
    const comments = commentsState.comments;
    // console.log(comments)
    const dispatch = useDispatch();

    useEffect(() => {
        commentService.getAll().then(value => dispatch({
            type: LOAD_COMMENTS,
            payload: value.data
        }))
    }, []);

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};