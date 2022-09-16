import React from 'react';

import './style.css'

const Spaceship = ({spaceship}) => {
    let{mission_name, launch_year, links} = spaceship;
    return (
        <div className="card">
            <img src={spaceship.links.mission_patch_small} alt={spaceship.mission_name}/>
            <div><h2>Name of mission - {spaceship.mission_name}</h2>
                <h3>Year of launch - {spaceship.launch_year}</h3>
            </div>

        </div>
    );
};

export default Spaceship;