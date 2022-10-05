import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postService} from "../../services";
import {LOAD_POSTS} from "../../actions";
import {Post} from "../Post/Post";

const Posts = () => {
    const postsState = useSelector(state=>state.postReducer);
    const posts = postsState.posts;
    // console.log(posts);
    const dispatch = useDispatch();

    useEffect(()=>{
        postService.getAll().then(value => dispatch({
            type: LOAD_POSTS,
            payload: value.data}))
    },[]);

    return (
        <div>
            {
                posts.map(post=><Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};