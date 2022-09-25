import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services";

const UserForm = ({setUsers}) => {
    const {register, reset, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: 'all',
        defaultValues: {
            name: 'name',
            username: 'username',
            email: 'email'
        }
    });

    const creatUser = (obj) => {
        userService.createUser(obj).then(({data}) => setUsers(users => [...users, data]))
    }

    return (
        <form onSubmit={handleSubmit(creatUser)}>

            <input type="text"
                   {...register("name", {required: {value: true, message: 'Error'}})}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type="text"
                   {...register("username", {required: {value: true, message: 'Error'}})}/>
            {errors.username && <span>{errors.username.message}</span>}

            <input type="text"
                   {...register("email", {required: {value: true, message: 'Error'}})}/>
            {errors.email && <span>{errors.email.message}</span>}

            <button>Save user</button>
        </form>
    );
};

export default UserForm;