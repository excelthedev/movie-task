import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import apiClient from "../../../common/api/apiClient";
import movieBox from "../../../assets/tv.png";
import Home from "../../../assets/Home.png";
import video from "../../../assets/Movie Projector.png";
import tvscreen from "../../../assets/TV Show.png";
import calendar from "../../../assets/Calendar.png";
import dummy from "../../../assets/Group 8.png";
import logout from "../../../assets/Logout.png";
import star from "../../../assets/Star.png";

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
        <div className="grid grid-cols-[1fr,5fr]">
          <aside className="h-screen border-2 border-[#0000004D] rounded-r-[2.218rem]">
            <div className="flex items-center gap-4 pl-3 pt-4 pb-[2rem]">
              {" "}
              <img src={movieBox} alt="moviebox" />
              <h1 className="text-[1.5rem] font-bold">MovieBox</h1>
            </div>

            <nav>
              <ul className="grid">
                <li className=" p-6  flex items-center gap-2 cursor-pointer  ">
                  <img src={Home} alt="home" />
                  <p className="font-bold text-[1.12rem] text-[#666]">Home</p>
                </li>
                <li className=" p-6 bg-[#be123c1a] flex cursor-pointer items-center gap-2  border-r-4 border-[#BE123C] text-[#BE123C]">
                  <img src={video} alt="home" />
                  <p className="font-bold text-[1.12rem]">Movies</p>
                </li>
                <li className=" p-6  flex items-center gap-2 cursor-pointer  ">
                  <img src={tvscreen} alt="home" />
                  <p className="font-bold text-[1.12rem] text-[#666]">
                    TV Series
                  </p>
                </li>
                <li className=" p-6  flex items-center gap-2 cursor-pointer  ">
                  <img src={calendar} alt="home" />
                  <p className="font-bold text-[1.12rem] text-[#666]">
                    Upcoming
                  </p>
                </li>
                <li className="pl-4">
                  <img
                    src={dummy}
                    alt="dummy"
                    className="w-[12rem] h-[12rem] cursor-pointer"
                  />
                </li>
                <li className="  flex p-6 items-center gap-2  ">
                  <img src={logout} alt="home" />
                  <p className="font-bold text-[1.12rem] text-[#666] cursor-pointer">
                    Log out
                  </p>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="h-screen p-10">
            {Array.isArray(movie) ? (
              movie.map((movie) => (
                <div key={movie.id}>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      alt="image background here"
                      className=" w-full h-[60svh] rounded-3xl"
                    />
                    <div className="flex justify-between">
                      <div className="flex gap-4 items-center pt-3">
                        {" "}
                        <p
                          className="text-[#404040] font-bold"
                          data-testid="movie-title"
                        >
                          {movie.title} •{" "}
                          <span data-testid="movie-release-date">
                            {movie.release_date}
                          </span>{" "}
                          • PG-13 •{" "}
                          <span data-testid="movie-runtime">
                            {movie.runtime}
                          </span>{" "}
                          mins
                        </p>
                        <span className="rounded-full inline-block  py-[2px] px-[10px] text-sm border-[1px] border-[#F8E7EB] text-[#B91C1C] font-semibold">
                          Action
                        </span>
                        <span className="border-[#F8E7EB] rounded-3xl inline-block py-[2px] px-[10px] text-sm border-[1px] text-[#B91C1C] font-semibold">
                          Drama
                        </span>
                      </div>

                      <div className="flex items-center">
                        <img src={star} alt="star" /> <p>, 8.5 | 350k</p>
                      </div>
                    </div>
                    <div className="text-[#333]" data-testid="movie-overview">
                      {movie.overview}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading please wait....</p>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
