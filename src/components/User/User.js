import React from 'react';
import {useDispatch} from "react-redux";

import {userActions} from "../../store";

const User = ({user}) => {
    const {id, name, username, email} = user;
    const dispatch = useDispatch();
    return (
        <div>
            <div>{id} - {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button onClick={() => dispatch(userActions.setCurrentUser(user))}>SELECT</button>
            <button onClick={() => dispatch(userActions.getById(user))}>get from API</button>
            <button onClick={() => dispatch(userActions.deleteById({id}))}>DELETE</button>
        </div>
    );
};

export {User};