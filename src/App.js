import './App.css';
import {useReducer} from "react";
import {Counter1, Counter2} from "./components";

function App() {

    // const reducer = (state, action) => {
    //     switch (action.type) {
    //         case 'INC1':
    //             return {...state, counter1: state.counter1 + 1}
    //         case 'DEC1':
    //             return {...state, counter1: state.counter1 - 1}
    //         case 'RESET1':
    //             return {...state, counter1: 0}
    //         case 'SET1':
    //             return {...state, counter1: action.payload}
    //
    //     }
    //     return {...state}
    // };
    //
    // const init = (initialValue) => {
    //     return {counter1: initialValue, counter2: initialValue}
    // }
    //
    // const [state, dispatch] = useReducer(reducer, 0, init);

    return (
        <div>
            {/*<h2>Counter 1: {state.counter1}</h2>*/}
            {/*<h2>Counter 2: {state.counter2}</h2>*/}
            {/*<button onClick={() => dispatch({type: 'INC1'})}>INC</button>*/}
            {/*<button onClick={() => dispatch({type: 'DEC1'})}>DEC</button>*/}
            {/*<button onClick={()=>dispatch({type: 'RESET1'})}>RESET</button>*/}
            {/*<button onClick={()=>dispatch({type: 'SET1', payload: 100})}>SET</button>*/}


            <Counter1/>
            <hr/>
            <Counter2/>
        </div>
    );


}

export default App;
