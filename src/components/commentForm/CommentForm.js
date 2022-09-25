import React from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../../services";
import comments from "../comments/Comments";

const CommentForm = ({setComments}) => {
    const {register, reset, handleSubmit, formState: {errors}} = useForm({
        mode: 'all',
        defaultValues: {
            name: 'name',
            body: 'body'
        }
    });

    const createComment = (obj) => {
        commentService.createComment(obj).then(({data}) => setComments(comments => [...comments, data]))
    }

    return (
        <form onSubmit={handleSubmit(createComment)}>

            <input type="text"
                   {...register("name", {required: {value: true, message: 'Error'}})}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type="text"
                   {...register("body", {required: {value: true, message: 'Error'}})}/>
            {errors.body && <span>{errors.body.message}</span>}

            <button>Save comment</button>
        </form>
    );
};

export default CommentForm;