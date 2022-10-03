import React from 'react';
import {useForm} from "react-hook-form";

const FormCat = ({addCat}) => {

    const {register, handleSubmit, reset} = useForm();

    const submit = (data) => {
        addCat(data)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'add cat'} {...register('cats')}/>
                <button>Save cat</button>
            </form>
        </div>
    );
};

export {FormCat};