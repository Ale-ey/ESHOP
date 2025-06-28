import React from "react";
import { Heading } from "../shared/Heading";
import blog1 from "../../assets/blogs/blog-1.jpg";
import blog2 from "../../assets/blogs/blog-2.jpg";
import blog3 from "../../assets/blogs/blog-3.jpg";

// changing dev add commit

const blogData = [
  {
    title: "Top 5 Tips to Choose the Perfect Headphones",
    subtitle:
      "Understand sound quality, comfort, and features before buying your next headphones.",
    published: "10 Feb by Kim",
    img: blog1,
  },
  {
    title: "Wireless vs Wired Headphones: What to Pick?",
    subtitle:
      "We break down the pros and cons of wireless and wired headphones for daily use.",
    published: "14 Mar by Kim",
    img: blog2,
  },
  {
    title: "Buying a Smartwatch? Read This First",
    subtitle:
      "Key features like battery, display, and compatibility to consider before buying a smartwatch.",
    published: "21 Jan by Kim",
    img: blog3,
  },
];
export const Blog = () => {
  return (
    <>
      <div id="blogs" className="container py-12 px-4 mx-auto">
        {/* header section  */}
        <Heading title={"Recent News"} subtitle={"Explore our Blogs"}></Heading>

        {/* blog section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 gap-y-7 sm:gap-4 sm:gap-y-6">
          {/* blog cards  */}
          {blogData.map((data,index) => (
            <div className="overflow-hidden rounded-2xl mb-2" key={index}>
              {/* img section  */}
              <div>
                <img src={data.img} alt="#" className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500 cursor-pointer "/>
              </div>
              {/* content section  */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1 dark:text-white/70">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
