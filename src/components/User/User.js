import React from 'react';
import {useDispatch} from "react-redux";

import {userActions} from "../../store";

const User = ({user}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div>{user.id} - {user.name}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <button onClick={()=>dispatch(userActions.setCurrentUser(user))}>SELECT</button>
            <button onClick={()=> dispatch(userActions.getById({id}))}>get from API</button>
        </div>
    );
};

export {User};