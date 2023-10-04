import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import CalculatorSlice from "../features/Calculator/Calculator.slice";
import watchAddNumRequest from "../features/Calculator/Calculator.saga";

const sagaMiddleware = createSagaMiddleware();

export const store=configureStore({
    reducer:{
        calculator:CalculatorSlice
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),

})
sagaMiddleware.run(watchAddNumRequest);