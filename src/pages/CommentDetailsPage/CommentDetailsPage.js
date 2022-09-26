import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";

import {postsService} from "../../services";
import {CommentDetails} from "../../components/CommentDetails/CommentDetails";

const CommentDetailsPage = () => {
    const {postId} = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        postsService.getById(postId).then(value => setPost(value.data))
    }, [postId]);

    return (
        <div>
            {post && <CommentDetails post={post} key={post.id}/>}
        </div>
    );
};

export {CommentDetailsPage};