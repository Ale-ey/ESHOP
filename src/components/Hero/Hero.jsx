import React from "react";
import Slider from "react-slick";
import Button from "../shared/Button";
import image1 from "../../assets/hero/image1.png";
import image2 from "../../assets/hero/image2.png";
import image3 from "../../assets/hero/macbook.png";

const heroData = [
  {
    id: 1,
    img: image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
  },
  {
    id: 3,
    img: image3,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "Laptops",
  },
];

export const Hero = ({ handleorderPopup }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container m-auto mt-3 sm:mt-5 xl:mt-7 px-4">
      <div className="  rounded-3xl   bg-gradient-to-r from-gray-300/80 to-gray-100 dark:from-gray-900 dark:to-gray-800   flex justify-center items-center ">
        {/* Hero section  */}
        <div className="container  pb-8 sm:pb-0">
          <Slider {...settings}>
            {heroData.map((data) => (
              <div key={data.id}>
                <div className="    grid grid-cols-1 sm:grid-cols-2">
                  {/* text section  */}
                  <div className=" flex flex-col justify-center gap-4 px-5 py-5 sm:px-10 text-center sm:text-left relative ">
                    <h1
                      data-aos="zoom-out"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="600"
                      className="text-2xl sm:text-6xl font-bold lg:text-3xl"
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="600"
                      className="text-3xl sm:text-5xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="600"
                      className="text-5xl uppercase text-white dark:text-white/20 sm:text-[80px] lg:text-[100px] lg:text-[150] font-bold"
                    >
                      {data.title2}
                    </h1>
                    <div
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="600"
                    >
                      <Button
                        handler={handleorderPopup}
                        text="Shop by Catagory"
                        bgColor="bg-primary"
                        textColor="text-white"
                      />
                    </div>
                  </div>
                  {/* img section  */}
                  <div>
                    <div>
                      <img
                        data-aos="fade-left"
                        data-aos-offset="0"
                        data-aos-duration="600"
                        data-aos-delay="300"
                        data-aos-once="true"
                        src={data.img}
                        alt="#"
                        className="w-[300px] h-[450px]  sm:w-[450px] min-h-[550px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgb(0,0,0,0.4)]   "
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
