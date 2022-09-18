import React, {useEffect, useState} from 'react';
import User from "../user/User";
import {getUsers} from "../../services/users.service";
import Details from "../details/Details";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    const lift = (obj) => {
        setUser(obj)
    }

    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, []);

    return (
        <div>
            {user && <Details user={user} key={user.id}/>}
            {
                users.map(user => <User user={user} key={user.id} lift={lift}/>)
            }
        </div>
    );
};

export default Users;