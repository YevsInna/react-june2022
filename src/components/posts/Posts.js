import React, {useEffect, useState} from 'react';

import {getAllPosts} from "../../services/jsplaceholder.service";
import Post from "../post/Post";
import '../style.css'

const Posts = () => {
   const [posts,setPosts] = useState([]);
   useEffect(()=>{
       getAllPosts().then(value =>
       setPosts(value.data))
   },[]);

    return (
        <div className="posts">
            {
                posts.map(post=><Post post={post} key={post.id}/>)
            }
        </div>

    );
};

export default Posts;