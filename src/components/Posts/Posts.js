import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postActions} from "../../store";
import {Post} from "../Post/Post";

const Posts = () => {

    const {posts, error, loading, postFromApi} = useSelector(state => state.postReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postActions.getAll())
    }, [])

    return (
        <div>
            {loading && <h1>LOADING.....</h1>}
            {error && <h1>ERROR</h1>}
            {postFromApi && postFromApi.title}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};