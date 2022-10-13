import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carAction} from "../../redux";
import {Car} from "../car/Car";
import css from './Cars.module.css'


const Cars = () => {

    const {cars} = useSelector(state => state.cars);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(carAction.getAll())
    },[]);

    return (
        <div className={css.Cars}>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};