import React, { useEffect } from "react";
import { useReducer, useDispatch, useSelector } from "react-redux";
import { fetchmovies } from "../redux/movieSlice";
import MovieCard from "./MovieCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Listing = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchmovies());
  }, [dispatch]);

  if (movieList.isLoading) {
    return (
      <>
        <div>
          <Card sx={{ maxWidth: 300, height: "300px" }}>
            <CardContent>
              <img src="" alt="" />
              <Typography gutterBottom variant="h6">
                Loading...
              </Typography>
              <Typography gutterBottom variant="h6">
                Loading...
              </Typography>
              <Typography gutterBottom variant="h6">
                Loading...
              </Typography>
            </CardContent>
          </Card>
          ;
        </div>
      </>
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
