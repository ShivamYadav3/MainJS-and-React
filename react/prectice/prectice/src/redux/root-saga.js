import { all, fork } from "redux-saga/effects";
import watchMovieRequest from "../features/Movies/Movies.Saga";
import watchAddNumRequest from "../features/Calculator/Calculator.saga";



export default function* rootSaga() {
  yield all([fork(watchMovieRequest), fork(watchAddNumRequest)]);
}