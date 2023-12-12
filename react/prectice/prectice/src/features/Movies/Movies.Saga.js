import { delay,put,takeLatest } from "redux-saga/effects";
import { getMovieFailed, getMovieRequestSuccess } from "./Movies.Slice";

function* fetchMovies() {
  try {
      console.log("final")
      yield delay(3000);
      console.log("okknkn")
    const result =yield fetchApi();
    yield put(getMovieRequestSuccess({ result }));
  } catch {
    yield put(getMovieFailed);
  }
}

async function fetchApi() {
  const data = await fetch(
    "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
  );
  const final = await data.json();
  console.log(final)
  return final;
}

function* watchMovieRequest() {
  yield takeLatest("movies/getMovieRequest", fetchMovies);
}

export default watchMovieRequest;
