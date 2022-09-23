import React, {useEffect, useState} from 'react';

import {carService} from "../../services";
import CarForm from "../carForm/CarForm";
import Car from "../car/Car";
import css from './Cars.module.css'

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        carService.getAll().then(({data}) =>
            setCars(data))
    }, []);

    const [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <div>
            <CarForm setCars={setCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <div className={css.Cars}>
                {
                    cars.map(car => <Car key={car.id} car={car} setCars={setCars} setCarForUpdate={setCarForUpdate}/>)
                }
            </div>
        </div>
    );
};

export default Cars;