import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {postReducer, userReducer} from "./slices";

const rootReducer = combineReducers({
    userReducer,
    postReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore};