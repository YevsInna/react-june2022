import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userService} from "../../services";
import {userActions} from "../../store";
import {User} from "../User/User";

const Users = () => {
    const dispatch = useDispatch();
    const {users, error,loading, userFromAPI} = useSelector(state => state.userReducer);

    useEffect(()=>{
        // userService.getAll().then(({data})=>dispatch(userActions.getAll(data)))
        dispatch(userActions.getAll())
    },[]);

    return (
        <div>
            {loading&&<h1>LOADING.....</h1>}
            {error&& <h1>ERROR</h1>}
            {userFromAPI&&userFromAPI.email}
            {
                users.map(user=><User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};