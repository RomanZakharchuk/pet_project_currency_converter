import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { currencyReducer } from "./slices";

const rootReducer = combineReducers( {
    currency: currencyReducer
} );

const setupStore = () => configureStore( {
    reducer: rootReducer
} );

export {
    setupStore
}