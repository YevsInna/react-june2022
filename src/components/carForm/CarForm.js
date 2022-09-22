import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";
import {carService} from "../../services";
import car from "../car/Car";


const CarForm = ({setCars, updateCar}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: 'all'
    });

    useEffect(()=>{
        setValue('model', 'BMW')
        setValue('price', '50000')
        setValue('year', '2022')
    },[])
   const submit =async (car)=> {
      const {data} = await carService.create(car);
      setCars(cars=>[...cars, data]);
      reset()
    }
updateCar(car)


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'}{...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
            <input type="text" placeholder={'price'}{...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'}{...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export default CarForm;