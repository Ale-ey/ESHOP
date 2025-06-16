import React from "react";
import { FaCarSide, FaCheckCircle, FaWallet } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const serviceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl text-primary md:text-5xl"/>,
    title: "Fast Shipping",
    description: "Delivery with in 7 Days",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl text-primary md:text-5xl" />,
    title: "Trusted Dealers",
    description: "All Items are Branded",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl text-primary md:text-5xl" />,
    title: "Secure Payment",
    description: "All Payments are Secure",
  },
  {
    id: 4,
    icon: <MdLocalShipping className="text-4xl text-primary md:text-5xl" />,
    title: "Free Shipping",
    description: "Shipping is Free All over Country",
  },
];

export const Services = () => {
  return (
    <div className="container mx-auto pt-10 ">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 justify-items-center" >
        {serviceData.map((data) => (
          <div key={data.id} className="flex flex-col items-center text-center  md:flex-row md:items-center min-w-1/2 ">
            {data.icon}
            <div className="mx-4">
              <h1 className="font-bold text-xl ">{data.title}</h1>
              <h1 className="text-gray-300 text-sm">{data.description}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
