import React, {useEffect, useState} from 'react';

import '../spaceship/style.css'
import {getSpace} from "../../services/spaceService";
import Spaceship from "../spaceship/Spaceship";
import {logDOM} from "@testing-library/react";

const Spaceships = () => {
    const [spaceships, setSpaceships] = useState([]);
    useEffect(() => {
        getSpace().then(value =>
        setSpaceships(value.data.filter(value => value.launch_year !== "2020")))
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