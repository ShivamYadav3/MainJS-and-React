import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieRequest } from "./Movies.Slice";

const Movies = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  console.log(movies);

  useEffect(() => {
    setTimeout(() => dispatch(getMovieRequest()), 5000);
  }, [dispatch]);

  const onRefreshMovie = () => {
    dispatch(getMovieRequest());
  };
  const _renderMovies = () => {
    if (movies.isLoading === "idle") {
      return <p style={{ color: "red" }}>Please wait.</p>;
    }
    if (movies.isLoading === "loading") {
      return <p style={{ color: "red" }}>loading wait.</p>;
    }
    if (movies.isLoading === "error") {
      return <p>Issue while fetching the movies.</p>;
    }
    if (movies.isLoading === "completed") {
      return movies.movies.map((item) => {
        return (
          <p style={{ color: "tomato" }} key={item.Title}>
            {item.Title}
          </p>
        );
      });
    }

    return null;
  };

  return (
    <div>
      <div>Movies</div>
      <button onClick={onRefreshMovie}>Refresh</button>
      {_renderMovies()}
    </div>
  );
};

export default Movies;
