import {useReducer} from "react";
import {addCat, addDog, deleteCat, deleteDog} from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
        case addCat: {
            return {...state, cats: [...state.cats, action.payload]}
        }
        case addDog: {
            return {...state, dogs: [...state.dogs, action.payload]}
        }
        case deleteCat: {
            const filterCatsArray = state.cats.filter(cat => cat !== action.payload);
            return {...state, cats: filterCatsArray}
        }
        case deleteDog:
            const filterDogsArr = state.dogs.filter(dog => dog !== action.payload);
            return {...state, dogs: filterDogsArr}
    }
}

const useReducerCatDog = ()=> useReducer(reducer, {cats: [], dogs: []});

export {useReducerCatDog}