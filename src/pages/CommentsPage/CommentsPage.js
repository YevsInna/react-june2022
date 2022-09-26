import React from 'react';
import {Outlet} from "react-router";

import {Comments} from "../../components";


const CommentsPage = () => {
    return (
        <div>
            <Outlet/>
            <Comments/>
        </div>
    );
};

export {CommentsPage};