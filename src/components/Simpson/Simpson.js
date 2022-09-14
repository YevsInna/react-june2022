import React from 'react';
import './style.css'

const Simpson = (props) => {
let {simpson} = props;

    return (
            <div>
                <div className="card">
                    <h3>{simpson.name} {simpson.surname}, {simpson.age} years old</h3>
                    <p>{simpson.info}</p>
                    <img className="photo" src={simpson.photo} alt={simpson.name}/>
                </div>
            </div>

    );
};

export default Simpson;