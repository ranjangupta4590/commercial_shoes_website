import React from "react";
import { SocialIcon  } from 'react-social-icons';
const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <>
      <footer className="bg-indigo-600 pt-7 pb-5">
        <div className="nike-container text-slate-200">
          <div className="grid  grid-cols-4 gap-5 md:grid-cols-2 ">
            <div className="grid items-start col-span-3 gap-5">
              <div className="grid items-start grid-cols-3  max-w-2xl w-full m-auto md:max-w-none md:gap-5">
                {titles.map((val, i) => (
                  <div key={i} className="grid items-center">
                    <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                      {val.titles}
                    </h1>
                  </div>
                ))}
                {links.map((list, i) => (
                  <ul key={i} className="grid items-center gap-1">
                    {list.map((link, i) => (
                      <li key={i} className="text-sm sm:text-xs cursor-pointer">
                        {link.link}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
            <div className="grid grid-row-1 grid-flow-col gap-3 justify-center items-center md:max-w-2xl md:w-[200%]">
            <div> <SocialIcon url="https://google.com/" target="_blank"bgColor="white" /> </div>
            <div> <SocialIcon url="https://twitter.com/" target="_blank" bgColor="white"/> </div>
            <div> <SocialIcon url="https://instagram.com/" target="_blank" bgColor="white"/> </div>
            <div> <SocialIcon url="https://facebook.com/" target="_blank" bgColor="white"/> </div>
            <div> <SocialIcon url="https://linkedin.com/" target="_blank" bgColor="white"/> </div>
            </div>
          </div>
          <hr className="mt-3" />
          <div className="mt-5 text-center ">
            <p className="text-sm md:text-center">
              Copyright<sup className="text-base font-bold">&copy;</sup> All
              Reserved Rights{" "}
              <span className="font-semibold">Gupta Developers</span>
            </p>
          </div>
          <div></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
