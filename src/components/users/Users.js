import React, {useEffect, useState} from 'react';
import User from "../user/User";
import {getUsers} from "../../services/users.service";

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
            {user &&
                <div>
                    <p>Username - {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Telephone number:{user.phone}</p>
                    <p>Website: {user.website}</p>
                    <p>Addresse: {user.address.city}, {user.address.street} street</p>
                </div>}
            {
                users.map(user => <User user={user} key={user.id} lift={lift}/>)
            }
        </div>
    );
};

export default Users;