import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router";

import {postsService} from "../../services";
import {CommentDetails} from "../../components/CommentDetails/CommentDetails";

const CommentDetailsPage = () => {

    const {state} = useLocation();
    const {postId} = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        if (!state) {
            postsService.getById(postId).then(value => setPost(value.data))
        }
    }, [postId]);

    return (
        <div>
            {post && <CommentDetails post={post} key={post.id}/>}
        </div>
    );
};

export {CommentDetailsPage};