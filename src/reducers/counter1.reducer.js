import {useReducer} from "react";

import {DEC, INC, RESET, SET} from "./counter.actions";

const reducer = (state, action) => {
    switch (action.type) {
        case INC:
            return {counter1: state.counter1 + 1}
        case DEC:
            return {counter1: state.counter1 - 1}
        case RESET:
            return {counter1: 0}
        case SET:
            return {counter1: action.payload}
    }
}
const useCounter1Reducer = ()=> useReducer(reducer, {counter1: 0});

export {useCounter1Reducer};