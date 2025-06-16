import React from "react";
import "./Navbar.css";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { Darkmode } from "./Darkmode";
import { IoIosSearch } from "react-icons/io"; // Changed this line back to the correct format

const menuLink = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#l",
  },
];
export const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white z-40  w-full">
      <div className="p-2 ">
        <div className="container flex justify-between items-center m-auto">
          <div className="flex items-center gap-5 ">
            {/* logo and links section */}
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              ESHOP
            </a>
            {/* menu items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {menuLink.map((item, index) => (
                  <li key={index}>
                    <a
                      className="inline-block font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200 px-4"
                      href={item.link}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                {/* drop down */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-1 font-semibold text-gray-500 hover:text-black dark:hover-text-white duration-200 px-4"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180" />
                    </span>
                  </a>
                  {/* DropDownlinks  */}
                  <div className="absolute z-[999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                    <ul className="space-y-2">
                      {DropdownLinks.map((item, index) => (
                        <li key={index}>
                          <a
                            href={item.link}
                            className="text-gray-500  dark:hover:text-white duration-200 p-2 w-full inline-block hover:bg-primary/20 rounded-md font-semibold"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Nav bar right section */}
          <div className="flex items-center justify-between ">
            {/* Search bar section  */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="search-bar  group-hover:border-gray-500 px-3 py-1 dark:border-gray-800 dark:bg-gray-900 group-hover:dark:bg-gray-800"
              />
              <IoIosSearch className="text-xl  text-gray-600 dark:text-gray-600 absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-primary " />
            </div>

            {/* order button  */}
            <button className="relative p-3">
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="bg-red-500 w-4 h-4 rounded-full text-white text-xs absolute top-0 right-0 flex items-center justify-center">
                4
              </div>
            </button>

            {/* darkmode button  */}
            <Darkmode />
          </div>
        </div>
      </div>
    </div>
  );
};
