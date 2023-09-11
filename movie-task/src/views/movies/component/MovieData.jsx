import TestData from "../../../assets/moviePoster.png";
import imbd from "../../../assets/imbd.png";
import fruit from "../../../assets/PngItem_1381056 1.png";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieData = () => {
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState("");

  const api_key = "1566d1f72c0b1f7acb9410e56ee1c0e5";

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?&api_key=${api_key}`)
      .then((res) => setMovieList(res.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {movieList.slice(0, 10).map((movie) => (
        <>
          <div
            key={movie.id}
            className=" grid gap-[0.75rem]"
            data-testid="movie-card"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="testdata"
              className="w-full"
              data-testid="movie-poster"
            />
            <p className="text-[#9CA3AF] font-bold text-xs">
              USA,{" "}
              <span data-testid="movie-release-date">
                {movie.release_date.slice(0, 4)}
              </span>
            </p>
            <p className="font-bold text-[#111827]" data-testid="movie-title">
              {movie.title}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {" "}
                <img src={imbd} alt="imbd" />
                <p className="text-xs">{movie.vote_average * 10}.0/100</p>
              </div>
              <div className="flex items-center gap-2">
                {" "}
                <img src={fruit} alt="fruit" />
                <p className="text-xs">97%</p>
              </div>
            </div>
            <p className="text-xs text-[#9CA3AF] font-bold">
              Action, Adventure, Horror
            </p>
          </div>
        </>
      ))}
      {error && <p>{error}</p>}
      {/* <div className=" grid gap-[0.75rem]">
        <img src={TestData} alt="testdata" className="w-full" />
        <p className="text-[#9CA3AF] font-bold text-xs">USA,2016- Current</p>
        <p className="font-bold text-[#111827]">Stranger Things</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {" "}
            <img src={imbd} alt="imbd" />
            <p className="text-xs">86.0/100</p>
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <img src={fruit} alt="fruit" />
            <p className="text-xs">97%</p>
          </div>
        </div>
        <p className="text-xs text-[#9CA3AF] font-bold">
          Action, Adventure, Horror
        </p>
      </div> */}
    </>
  );
};

export default MovieData;
