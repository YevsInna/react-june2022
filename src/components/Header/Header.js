import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'


const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to={'/users'}>USERS</NavLink>
            <NavLink to={'/posts'}>POSTS</NavLink>
            <NavLink to={'/comments'}>COMMENTS</NavLink>
        </div>
    );
};

export {Header};