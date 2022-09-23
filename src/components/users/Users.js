import React, {useEffect, useState} from 'react';

import UserForm from "../userForm/UserForm";
import {userService} from "../../services";
import User from "../user/User";


const Users = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))

   }, [])

    return (
        <div>
            <div><UserForm/></div>
            <div>
                {
                   users.map(user=><User user={user} key={user.id}/>)
                }
            </div>
        </div>
    );
};

export default Users;