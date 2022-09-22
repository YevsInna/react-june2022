import React, {useEffect, useState} from 'react';

import User from "../user/User";
import '../style.css'
import {userService} from "../../services";

const Users = ({getUserId}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(value =>
            setUsers(value.data))
    }, []);

    return (
        <div className="wrap">
            {
                users.map(user=> <User user={user} key={user.id} getUserId={getUserId}/>)
            }
        </div>
    );
};

export default Users;