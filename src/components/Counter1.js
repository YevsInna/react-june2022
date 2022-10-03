import React from 'react';
import {DEC, INC, RESET, SET, useCounter1Reducer} from "../reducers";

const Counter1 = () => {
    const [state, dispatch] = useCounter1Reducer();
    return (
        <div>
            <h1>Counter 1: {state.counter1}</h1>
            <button onClick={()=> dispatch({type: INC})}>INC</button>
            <button onClick={()=> dispatch({type: DEC})}>DEC</button>
            <button onClick={()=> dispatch({type: RESET})}>RESET</button>
            <button onClick={()=> dispatch({type: SET, payload: 100})}>SET</button>
        </div>
    );
};

export {Counter1};