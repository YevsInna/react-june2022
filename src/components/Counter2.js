import React from 'react';
import {DEC, INC, RESET, SET, useCounter2Reducer,} from "../reducers";

const Counter2 = () => {
    const [state, dispatch] = useCounter2Reducer();
    return (
        <div>
            <h1>Counter 2: {state.counter2}</h1>
            <button onClick={()=> dispatch({type: INC})}>INC</button>
            <button onClick={()=> dispatch({type: DEC})}>DEC</button>
            <button onClick={()=> dispatch({type: RESET})}>RESET</button>
            <button onClick={()=> dispatch({type: SET, payload: 200})}>SET</button>
        </div>
    );
};

export {Counter2};