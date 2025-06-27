import React from "react";
import Button from "../shared/Button";
import gaming from "../../assets/category/gaming.png";
import vr from "../../assets/category/vr.png";

import speaker from "../../assets/category/speaker.png";

export const Category2 = ({handleorderPopup}) => {
  return (
    <div className="py-2 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col  */}
          <div className="sm:col-span-2 bg-gradient-to-br from-gray-400/90 to-gray-100  py-15 pl-5 text-white rounded-3xl h-[320px] flex items-start relative hover:scale-105 duration-200">
            <div>
              <div className="mb-4 ">
                <p className="text-2xl text-white mb-2">Enjoy</p>
                <p className="text-2xl font-semibold mb-2">With</p>
                <p className="text-4xl xl:text-5xl opacity-20 font-bold mb-2 text-white">
                  CONSOLE
                </p>
                <Button
                  handler={handleorderPopup}
                  text={"Browse"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={gaming}
              alt="#"
              className="absolute  w-[250px] right-0 top-10"
            />
          </div>

          {/* second col  */}
          <div className="bg-gradient-to-br from-brandGreen/90 to-brandGreen  py-15 pl-5 text-white rounded-3xl h-[320px] flex items-end relative hover:scale-105 duration-200">
            <div>
              <div className="mb-4 ">
                <p className="text-2xl text-white mb-2">Enjoy</p>
                <p className="text-2xl font-semibold mb-2 text-white">With</p>
                <p className="text-4xl xl:text-5xl opacity-20 font-bold mb-2 ">
                  Gadget
                </p>
                <div className="z-10 relative">
                  <Button
                    handler={handleorderPopup}
                    text={"Browse"}
                    bgColor={"bg-white"}
                    textColor={"text-brandGreen"}
                  />
                </div>
              </div>
            </div>
            <img
              src={vr}
              alt="#"
              className="absolute  w-[320px] right-0 bottom-0 z-0"
            />
          </div>
          {/* third col  */}
          <div className="bg-gradient-to-br from-brandBlue/90 to-brandBlue/70  py-15 pl-5 text-white rounded-3xl h-[320px] flex items-start relative hover:scale-105 duration-200">
            <div>
              <div className="mb-4">
                <p className="text-2xl text-white mb-2">Enjoy</p>
                <p className="text-2xl font-semibold mb-2">With</p>
                <p className="text-4xl xl:text-5xl opacity-20 font-bold mb-2">
                  Earphone
                </p>
                <div className="z-10 relative">
                  <Button
                    handler={handleorderPopup}
                    text={"Browse"}
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </div>
              </div>
            </div>
            <img
              src={speaker}
              alt="#"
              className="absolute  w-[320px] bottom-0 right-0 z-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
