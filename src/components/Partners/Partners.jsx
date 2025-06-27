import React from "react";
import img1 from "../../assets/brand/br-1.png";
import img2 from "../../assets/brand/br-2.png";
import img3 from "../../assets/brand/br-3.png";
import img4 from "../../assets/brand/br-4.png";
import img5 from "../../assets/brand/br-5.png";
export const Partners = () => {
  return (
    <>
      <div className="bg-gray-400/20 py-6 mt-4">
        <div className="flex justify-between py-12 opacity-50 items-center rounded-md container mx-auto px-4">
          <img src={img1} alt="#" className="w-[80px] dark:invert" />
          <img src={img2} alt="#" className="w-[80px] dark:invert" />
          <img src={img3} alt="#" className="w-[80px] dark:invert" />
          <img src={img4} alt="#" className="w-[80px] dark:invert" />
          <img src={img5} alt="#" className="w-[80px] dark:invert" />
        </div>
      </div>
    </>
  );
};
