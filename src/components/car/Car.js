import React from 'react';

import {useDispatch} from "react-redux";
import css from './Car.module.css'
import {carAction} from "../../redux";

const Car = ({car}) => {
    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    return (

            <div className={css.Car}>
                <div>ID: {id}</div>
                <div>MODEL: {model}</div>
                <div>PRICE: {price}</div>
                <div>YEAR: {year}</div>
                <button onClick={() => dispatch(carAction.setCarForUpdate(car))}>UPDATE</button>
                <button onClick={() => dispatch(carAction.deleteById({id}))}>DELETE</button>
            </div>

    );
};

export {Car};