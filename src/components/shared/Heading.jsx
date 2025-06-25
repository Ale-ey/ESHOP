import React from "react";

export const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10 max-w-[600px] mx-auto">
      <h1 className="text-3xl font-bold lg:text-5xl" >{title}</h1>
      <p className="text-ms my-2 text-gray-500">{subtitle}</p>
    </div>
  );
};
