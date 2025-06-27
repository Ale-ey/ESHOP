import React from "react";
import { FaCarSide, FaCheckCircle, FaWallet } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const serviceData = [
  {
    id: 1,
    icon: (
      <FaCarSide className="text-2xl sm:text-4xl text-primary md:text-5xl" />
    ),
    title: "Fast Shipping",
    description: "Delivery with in 7 Days",
  },
  {
    id: 2,
    icon: (
      <FaCheckCircle className="text-2xl sm:text-4xl text-primary md:text-5xl" />
    ),
    title: "Trusted Dealers",
    description: "All Items are Branded",
  },
  {
    id: 3,
    icon: (
      <FaWallet className="text-2xl sm:text-4xl text-primary md:text-5xl" />
    ),
    title: "Secure Payment",
    description: "All Payments are Secure",
  },
  {
    id: 4,
    icon: (
      <MdLocalShipping className="text-2xl sm:text-4xl text-primary md:text-5xl" />
    ),
    title: "Free Shipping",
    description: "Shipping is Free All over Country",
  },
];

export const Services = () => {
  return (
    <div className="container mx-auto pt-10 px-4 ">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 justify-items-center">
        {serviceData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col items-center text-center text  md:flex-row md:items-center min-w-1/2 hover:scale-103 cursor-pointer"
          >
            {data.icon}
            <div className="mx-4">
              <h1 className="font-bold text-md md:text-xl dark:text-white ">
                {data.title}
              </h1>
              <h1 className="text-gray-600 dark:text-white text-xs md:text-sm">
                {data.description}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
