import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import apiClient from "../../../common/api/apiClient";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState("");
  const api_key = apiClient;

  const getMovieDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?&api_key=${api_key}`
      );
      const movieData = response.data;

      // Convert release_date to UTC
      const releaseDateUTC = new Date(movieData.release_date).toUTCString();

      // Convert runtime to minutes
      const runtimeMinutes = movieData.runtime;

      // Create a new movie object with the converted data
      const updatedMovie = {
        ...movieData,
        release_date: releaseDateUTC,
        runtime: runtimeMinutes,
      };

      setMovie([updatedMovie]);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <>
      <div>
        <div>
          {Array.isArray(movie) ? (
            movie.map((movie) => (
              <div key={movie.id}>
                <h1>Movie-id: {movie.id}</h1>
                <h2 data-testid="movie-title"> {movie.title}</h2>
                <h3 data-testid="movie-release-date">{movie.release_date}</h3>
                <h4 data-testid="movie-runtime">{movie.runtime} minutes</h4>
                <h5 data-testid="movie-overview">{movie.overview}</h5>
              </div>
            ))
          ) : (
            <p>Loading please wait....</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
