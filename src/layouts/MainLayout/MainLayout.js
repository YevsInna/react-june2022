import React from 'react';
import {Outlet} from "react-router";

import {Header} from "../../components";


const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};