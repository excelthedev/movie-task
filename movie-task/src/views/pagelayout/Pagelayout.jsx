import movielogo from "../../assets/tv.png";
import signlogo from "../../assets/Menu.png";
import searchIcon from "../../assets/Search.png";
import imbd from "../../assets/imbd.png";
import play from "../../assets/Play.png";
import fruit from "../../assets/PngItem_1381056 1.png";
import classes from "./Pagelayout.module.css";
import Movies from "../movies/Movies";

const Pagelayout = () => {
  return (
    <>
      <div className={classes.hero}>
        {/* for the top sections */}
        <nav className="flex items-center justify-between px-[5.4rem] py-[1.75rem]">
          <div className="flex items-center gap-[1.5rem]">
            <img src={movielogo} alt="moviebox" className="cursor-pointer" />
            <p className="text-white text-[1.5rem] font-[700] cursor-pointer">
              MovieBox
            </p>
          </div>

          {/* search input */}
          <form
            action="#"
            className="flex items-center h-[2.24rem] rounded-md bg-transparent border-2 border-white px-3"
          >
            <input
              type="text"
              placeholder="What do you want to watch?"
              className="w-[33.81rem] h-[2.24rem] rounded-md bg-transparent border-0 border-white outline-none placeholder:text-white "
            />

            <img src={searchIcon} alt="searchicon" className="inline" />
          </form>

          <div className="flex items-center gap-4">
            <p className="text-[1rem] font-[700] text-white cursor-pointer">
              Sign in
            </p>
            <img src={signlogo} alt="signIn" className="cursor-pointer" />
          </div>
        </nav>

        {/* parabellum */}
        <div className="flex items-center justify-between pr-4 pt-[5.81rem] pl-[5.31rem]">
          <div className="">
            <p className="text-[3rem] font-semibold text-white pb-2">
              John Wick 3 : <br /> Parabellum
            </p>
            <div className="flex items-center gap-6 pb-4">
              <div className="flex items-center gap-2 pr-2">
                <img src={imbd} alt="fruit" /> <p>86.0/100</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={fruit} alt="fruit" /> <p>97%</p>
              </div>
            </div>
            <p className="mb-4">
              John Wick is on the run after killing a member <br /> of the
              international assassins' guild, and with <br /> a $14 million
              price tag on his head, he is the <br /> target of hit men and
              women everywhere.
            </p>

            <div className="bg-[#BE123C] flex items-center py-[0.475rem] px-[1rem] w-[11rem] rounded gap-2">
              <img src={play} alt="play" className="inline" />
              <p className="text-[0.93rem] uppercase font-semibold cursor-pointer ">
                Watch Trailer
              </p>
            </div>
          </div>
          <div className="">
            <ul className="text-[0.75rem] inline-flex gap-1 flex-col items-center">
              <li>1</li>
              <li>2</li>
              <li className="text-[1rem]"> 3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
        </div>
      </div>

      <Movies />

      <div>
        <div>
          <p>iconheres</p>
          <p>text here</p>
          <p>copyright yarns here</p>
        </div>
      </div>
    </>
  );
};

export default Pagelayout;
