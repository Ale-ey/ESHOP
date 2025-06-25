import React from "react";
import Button from "../shared/Button";
export const ProductCard = ({ data }) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  place-items-center">
        {/* cards section  */}
        {data.map((current) => (
          <div key={current.id}>
            <div className="relative group">
              <img src={current.img} alt="#" className="w-full " />

              {/* hover button  */}
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-xs duration-200 ">
                <Button
                  className=""
                  text={"Add to Cart"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                ></Button>
              </div>
            </div>
            <div className="">
              <h2 className="text-md font-semibold">{current.title}</h2>
              <h2 className="font-bold">{`$${current.price}`}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
