import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userService} from "../../services";
import {LOAD_USERS} from "../../actions";
import {User} from "../User/User";


const Users = () => {
    const usersState = useSelector(state => state.userReducer);
    const users = usersState.users;
    // console.log(users)
    const dispatch = useDispatch();

    useEffect(() => {
        userService.getAll().then(value => dispatch({
            type: LOAD_USERS,
            payload: value.data
        }))
    }, []);

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};