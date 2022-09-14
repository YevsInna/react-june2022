import React from 'react';
import {simpsons} from "../data";
import Simpson from "../Simpson/Simpson";
import '../Simpson/style.css'

const Simpsons = () => {

    return (
        <div className="wrap">
            {
                simpsons.map(simpson => (<Simpson simpson={simpson} key={simpson.age}/>))
            }
        </div>
    );
};

export default Simpsons;