import React, {useEffect, useState} from 'react';

import {getAllUsers} from "../../services/jsplaceholder.service";
import User from "../user/User";
import '../style.css'

const Users = ({lift}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAllUsers().then(value =>
            setUsers(value.data))
    }, []);

    return (
        <div className="wrap">
            {
                users.map(user=> <User user={user} key={user.id} lift={lift}/>)
            }
        </div>
    );
};

export default Users;