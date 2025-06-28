import React from "react";
import Button from "../shared/Button";
import earphone from "../../assets/category/earphone.png";
import watch from "../../assets/category/watch.png";

import macbook from "../../assets/category/macbook.png";

export const Category = ({handleorderPopup}) => {
  return (
    <div id="category" className="py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col  */}
          <div className=" bg-gradient-to-br from-black/90 to-black/70  py-15 pl-5 text-white rounded-3xl h-[320px] flex items-end relative hover:scale-105 duration-200">
            <div>
              <div className="mb-4">
                <p className="text-2xl text-gray-400 mb-2">Enjoy</p>
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
              src={earphone}
              alt="#"
              className="absolute  w-[320px] bottom-0 z-0"
            />
          </div>
          {/* second col  */}
          <div className="bg-gradient-to-br from-brandYellow to-brandYellow/90  py-15 pl-5 text-white rounded-3xl h-[320px] flex items-end relative hover:scale-105 duration-200">
            <div>
              <div className="mb-4 ">
                <p className="text-2xl text-gray-400 mb-2">Enjoy</p>
                <p className="text-2xl font-semibold mb-2">With</p>
                <p className="text-4xl xl:text-5xl opacity-20 font-bold mb-2">
                  Gadget
                </p>
                <Button
                  handler={handleorderPopup}
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </div>
            </div>
            <img
              src={watch}
              alt="#"
              className="absolute  w-[320px] -right-10 top-0 "
            />
          </div>
          {/* third col  */}
          <div className="sm:col-span-2 bg-gradient-to-br from-primary to-primary/90  py-15 pl-5 text-white rounded-3xl h-[320px] flex items-end relative hover:scale-105 duration-200">
            <div>
              <div className="mb-4 ">
                <p className="text-2xl text-gray-400 mb-2">Enjoy</p>
                <p className="text-2xl font-semibold mb-2">With</p>
                <p className="text-4xl xl:text-5xl opacity-20 font-bold mb-2">
                  Laptop
                </p>
                <Button
                  handler={handleorderPopup}
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img
              src={macbook}
              alt="#"
              className="absolute  w-[250px] right-0 top-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
