import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import CalculatorSlice from "../features/Calculator/Calculator.slice";
import watchAddNumRequest from "../features/Calculator/Calculator.saga";
import watchMovieRequest from "../features/Movies/Movies.Saga";
import MoviesSlice from "../features/Movies/Movies.Slice";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

export const store=configureStore({
    reducer:{
        calculator:CalculatorSlice,
        movies:MoviesSlice
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),

})
sagaMiddleware.run(rootSaga);