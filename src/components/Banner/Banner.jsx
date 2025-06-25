import React from "react";

export const Banner = ({ data }) => {
  return (
    <>
      <div className="flex justify-center items-center min-h-[340px] sm:min-h-[450px] py-12">
        <div className="container mx-auto ">
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 item-center text-white rounded-3xl bg-${data.bg_color}`}
          >
            {/* first col  */}
            <div className="p-4 ms:p-4">
              <p className="text-xl font-semibold">{data.discount}</p>
              <h1 className="text-3xl sm:text-4xl uppercase lg:text-7xl font-bold object-cover">
                {data.title}
              </h1>
            </div>
            {/* second col  */}
            <div className="h-full flex item-center">
              <img
                src={data.img}
                alt=""
                className="w-[450px] sm:w-[340px] mx-auto drop-shadow-2xl  sm:-my-12"
              />
            </div>
            {/* third col  */}
            <div className="flex flex-col justify-center p-4 sm:p-3">
              <p className="text-xl font-bold">{data.title2}</p>
              <p className="text-3xl md:text-5xl font-bold">{data.title3}</p>
              <p className="text-sm tracking-wider leading-5 mb-2">
                {data.title4}
              </p>
              <button
                className={`bg-white py-2 px-4 w-fit cursor-pointer hover:scale-105 duration-200 font-semibold rounded-full text-${data.bg_color}`}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
