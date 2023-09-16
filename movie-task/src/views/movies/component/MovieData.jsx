import imbd from "../../../assets/imbd.png";
import fruit from "../../../assets/PngItem_1381056 1.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import apiClient from "../../../common/api/apiClient";
import heart from "../../../assets/Heart.png";

const MovieData = () => {
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState("");

  const api_key = apiClient;

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?&api_key=${api_key}`)
      .then((res) => setMovieList(res.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      <div
        className="grid grid-cols-4 items-center gap-[5rem]"

      >
        {movieList.slice(0, 10).map((movie) => (
          <div key={movie.id}  data-testid="movie-card"  >
            <Link to={`/movies/${movie.id}`}>
              <div className=" grid gap-[0.75rem] cursor-pointer relative"   >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="testdata"
                  className="w-full"
                  data-testid="movie-poster"
                />
                <p className="bg-[#F3F4F6] brightness-[1] p-1 absolute rounded-2xl left-[14rem] top-[0.97rem] ">
                  <img src={heart} alt="heart" />
                </p>
                <p className="text-[#9CA3AF] font-bold text-xs">
                  USA,{" "}
                  <span data-testid="movie-release-date">
                    {movie.release_date.slice(0, 4)}
                  </span>
                </p>
                <p
                  className="font-bold text-[#111827]"
                  data-testid="movie-title"
                >
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
            </Link>
          </div>
        ))}
      </div>
      <div>
        {/* {error && (
          <p>ooopsss there's an error somewhere, Please check back later :(</p>
        )} */}
      </div>
    </>
  );
};

export default MovieData;
