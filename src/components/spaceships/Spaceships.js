import React, {useEffect, useState} from 'react';

import '../spaceship/style.css'
import {getSpace} from "../../services/spaceService";
import Spaceship from "../spaceship/Spaceship";

const Spaceships = () => {
    const [spaceships, setSpaceships] = useState([]);
    useEffect(() => {
        getSpace().then(value =>
        const filterArr = value.filter(value => value.data.launch_year !== 2020)
        setSpaceships(filterArr)
    }, []);

    return (
        <div className="wrap">
            {
                spaceships.map((spaceship, index) =>
                    <Spaceship spaceship={spaceship} key={spaceship.flight_number}/>
                )
            }
        </div>
    );
};


export default Spaceships;