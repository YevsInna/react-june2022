import React, {useEffect} from 'react';

import css from './Car.module.css'
import {carService} from "../../services";
import {useForm} from "react-hook-form";

const Car = ({car, setCars, updateCar}) => {

    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteById(id);
        setCars(cars => {
            const index = cars.findIndex(value => value.id === id);
            cars.splice(index, 1);
            return [...cars];
        })
    };



    return (
        <div className={css.Car}>
            <div>
                <div>id: {id}</div>
                <div>model: {model}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
            </div>
            <div className={css.Tools}>
                <button onClick={() => updateCar(car)}>Update</button>
                <button onClick={() => deleteCar()}>Delete</button>
            </div>
        </div>

    );
};

export default Car;