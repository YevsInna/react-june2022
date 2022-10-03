import React from 'react';
import {useForm} from "react-hook-form";

const FormDog = ({addDog}) => {

    const {register, handleSubmit, reset} = useForm();

    const submit = (data) => {
        addDog(data)
        reset()
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'add dog'} {...register('dogs')}/>
            <button>Save dog</button>
        </form>
    );
};

export {FormDog};