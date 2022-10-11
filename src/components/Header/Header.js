import React from 'react';
import {useSelector} from "react-redux";

import css from './Header.module.css'

const Header = () => {
    const {currentUser} = useSelector(state => state.userReducer);
    const {currentPost} = useSelector(state => state.postReducer);
    return (
        <div className={css.Header}>
            <div>{currentUser && currentUser.name}</div>
            <div>{currentPost && currentPost.title}</div>
        </div>
    );
};

export {Header};