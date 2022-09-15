import React from 'react';

import '../characters/style.css'

const Character = ({character}) => {
    let {id, name, status, species, gender, image} = character;

    return (
        <div className="card">
            <img className="photo" src={character.image} alt={character.name}/>
            <div>
                <h2>{character.id} - {character.name}</h2>
                <h3>Status - {character.status}, species - {character.species}, gender - {character.gender}</h3>
            </div>
        </div>
    );
};

export default Character;