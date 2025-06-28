import React from "react";
import { Heading } from "../shared/Heading";
import { ProductCard } from "../ProductCard/ProductCard";
import img1 from "../../assets/product/p-1.jpg";
import img2 from "../../assets/product/p-2.jpg";
import img3 from "../../assets/product/p-3.jpg";
import img4 from "../../assets/product/p-4.jpg";
import img5 from "../../assets/product/p-5.jpg";
import img6 from "../../assets/product/p-7.jpg";
import img7 from "../../assets/product/p-7.jpg";
import img8 from "../../assets/product/p-2.jpg";
import img9 from "../../assets/product/p-9.jpg";
const productsData = [
  {
    id: 1,
    img: img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "30",
  },
  {
    id: 2,
    img: img1,
    title: "Google Headphone",
    price: "320",
    aosDelay: "10",
  },
  {
    id: 3,
    img: img3,
    title: "Rocky Headphone",
    price: "150",
    aosDelay: "50",
  },
  {
    id: 4,
    img: img4,
    title: "Ionic Headphone",
    price: "170",
    aosDelay: "30",
  },
  {
    id: 5,
    img: img5,
    title: "Boost Headphone",
    price: "190",
    aosDelay: "70",
  },
  {
    id: 6,
    img: img6,
    title: "Zero Headphone",
    price: "450",
    aosDelay: "60",
  },
  {
    id: 7,
    img: img7,
    title: "Cool Headphone",
    price: "450",
    aosDelay: "20",
  },
  {
    id: 8,
    img: img8,
    title: "Sharp Headphone",
    price: "400",
    aosDelay: "40",
  },
];

export const Products = ({ handleorderPopup }) => {
  return (
    <>
      <div id="bestsellings" className="container mx-auto px-4">
        {/* headersection  */}
        <Heading title="Our Products" subtitle="Explore Our Products"></Heading>
        {/* bodysection  */}
        <ProductCard
          data={productsData}
          handleorderPopup={handleorderPopup}
        ></ProductCard>
        {/* <img src={productsData[].img} alt="" /> */}
      </div>
    </>
  );
};
