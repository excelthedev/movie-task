import React from "react";
import rightArrow from "../../assets/Chevron right.png";
import classes from "./Movies.module.css";
import MovieData from "./component/MovieData";
import TestData from "../../assets/moviePoster.png";
import imbd from "../../assets/imbd.png";
import fruit from "../../assets/PngItem_1381056 1.png";
const Movies = () => {
  return (
    <>
      <div className={classes.movies}>
        <div>
          <div className="flex items-center pb-10">
            <h1 className="text-[2.25rem] font-semibold col-span-3">
              Featured Movie
            </h1>
            <p className="flex items-center text-[#BE123C] cursor-pointer gap-2 ml-auto">
              <span>See More </span> <img src={rightArrow} alt="rightAarrow" />{" "}
            </p>
          </div>
          {/* movies component in grid  */}

          {/* <div className=" grid gap-[0.75rem]">
              <img src={TestData} alt="testdata" className="w-full" />
              <p className="text-[#9CA3AF] font-bold text-xs">
                USA,2016- Current
              </p>
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
          <MovieData />
        </div>
      </div>
    </>
  );
};

export default Movies;
