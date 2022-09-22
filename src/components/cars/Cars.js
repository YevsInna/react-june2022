import React, {useEffect, useState} from 'react';

import {carService} from "../../services";
import CarForm from "../carForm/CarForm";
import Car from "../car/Car";
import css from './Cars.module.css'
import car from "../car/Car";

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        carService.getAll().then(({data}) =>
            setCars(data))
    }, []);

    const updateCar = async () => {
        const {data} = await carService.updateById(id,car);

    }

    return (
        <div>
            <CarForm setCars={setCars} updateCar={updateCar}/>
            <hr/>
            <div className={css.Cars}>
                {
                    cars.map(car => <Car key={car.id} car={car} setCars={setCars} updateCar={updateCar}/>)
                }
            </div>
        </div>
    );
};

export default Cars;