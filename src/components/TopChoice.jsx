import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
// import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
// import { ClockIcon } from "@heroicons/react/24/outline";
import Title from "./utils/Title";
// import { truncate } from "lodash";

const TopChoice = ({choice:{title,items}}) => {
    const splideOptions = {
        perPage: 4,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
          1200: { perPage: 3},
          991: { perPage: 2},
          768: { perPage: 2},
          500: { perPage: 1},
          425: { perPage: 1},
        },
      };
  return (
    <>
      <div className="nike-container mb-11">
        <Title title={title} />
        <div className="mt-8">
          <Splide options={splideOptions}>
            {items.map((val, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <div className="relative grid items-center gap-4 pb-4 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200 ">
                  <div className="flex items-center justify-center ">
                    <img
                      src={val.img}
                      alt={`img/choices/${i}`}
                      className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg cursor-pointer hover:scale-90 transition-all duration-300"
                    />
                  </div>
                   <div className="flex items-center justify-center px-3 w-full">
                    <button  className="w-full bg-rose-600  text-center text-slate-100 py-1.5 mr-2 button-theme">Add To Cart</button>
                    <button  className="w-full bg-rose-600  text-center text-slate-100 py-1.5 ml-2 button-theme">Shop Now</button>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default TopChoice;
