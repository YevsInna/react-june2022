import React, {useState} from 'react';

import Character from "../character/Character";
import './style.css'

const Characters = () => {
    let [characters, setCharacters] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
    .then(value => value.json())
    .then(value => {
        setCharacters(value.results.slice(0,6));
    });

    return (
        <div  className="wrap">
            {
                characters.map(character=><Character character={character} key={character.id}/>)
            }
        </div>
    );
};

export default Characters;