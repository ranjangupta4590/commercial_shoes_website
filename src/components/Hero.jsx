import React from "react";
import hero from "../assets/hero.png";
const Hero = () => {
  return (
    <div className="relative h-auto w-auto flex flex-col">
      <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h[55vh] w-auto absolute top-0 left-0 right-0  opacity-100 z-9"></div>
      <div className="relative opacity-100 z-20 grid item-center justify-items-center nike-container ">
        <div className="grid items-center justify-center mt-28 md:mt-24">
          <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
            Play With Your Electric Feet
          </h1>
          <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
            Adapt 2.0 generation Sneekers
          </h1>
          <button
            type="button"
            className="button-theme bg-slate-200 rounded-xl my-5"
          >
            Explore
          </button>
          {/* <div>video</div>
        <div>social</div> */}
        </div>

        <div>
          <img src={hero} alt="hero-img/img" className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill" />
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Hero;
