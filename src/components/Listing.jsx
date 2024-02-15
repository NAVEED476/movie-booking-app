import React, { useEffect } from "react";
import { useReducer, useDispatch, useSelector } from "react-redux";
import { fetchmovies } from "../redux/movieSlice";
import MovieCard from "./MovieCard";

const Listing = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchmovies());
  }, [dispatch]);

  if (movieList.isLoading) {
    return (
      <div>
        <p>Loading...!</p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "10px",
        gap: "30px",
      }}
    >
      {movieList.value &&
        movieList.value.map((movieObj) => (
          <div
            key={movieObj.imdbID}
            style={{ width: "33 0px", objectFit: "contain" }}
          >
            <MovieCard movieObj={movieObj} />
          </div>
        ))}
    </div>
  );
};

export default Listing;
