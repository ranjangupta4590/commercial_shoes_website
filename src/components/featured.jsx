import React from "react";

const Featured = ({
  ifExists,
  endpoint: { title, heading, text, img, btn, url },
}) => {
  return (
    <div>
      <div
        className={`flex items-center justify-items-center lg:flex-col lg:justify-center nike-container`}
      >
        <div className="max-w-lg lg:max-w-none w-full ma:text-center">
          <h1 className="text-4xl sm:text-3xl font-bold text-gradient">{heading}</h1>
          <h1 className="">{title}</h1>
          <p>{text}</p>
          <a href={url}>
            <button type="button" className="">
              {btn}
            </button>
          </a>
        </div>
        <div>
          <img src={img} alt={`img/${heading}`} />
        </div>
      </div>
    </div>
  );
};

export default Featured;
