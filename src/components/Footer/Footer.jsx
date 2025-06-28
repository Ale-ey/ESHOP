import React from "react";
import { Linkedin } from "lucide-react";
import { SiGmail } from "react-icons/si";
const footerlinks = ["Home", "Shop", "Products", "Blogs"];
const quicklinks = ["About", "Contact", "FAQs", "Support"];

export const Footer = () => {
  return (
    <footer
      id="about"
      className="bg-gray-600/40 py-8 text-sm text-black/80 dark:text-white/80"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Column 1: Brand & Developer Info */}
        <div className="flex-1 space-y-2">
          <a
            href="#"
            className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
          >
            ESHOP
          </a>
          <div className="flex items-center gap-2">
            <p className="font-semibold">Developer:</p>
            <p>Ali Haider</p>
          </div>
          <a
            href="https://www.linkedin.com/in/ali-haider-0284b42a7/" // update with your profile
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:font-semibold duration-200"
          >
            <Linkedin className="w-5 h-5" />
            <p>Click here to visit profile</p>
          </a>
          <p className="flex justify-start items-center gap-2">
            {<SiGmail />}Aleeyhaider986@gmail.com
          </p>
          <p className="text-justify">
            A Software Engineering student at SEECS, NUST. I'm passionate about
            web and Android development, UI/UX design, and Event Management.
          </p>
        </div>

        {/* Column 2: Footer Links */}
        <div className="flex flex-row gap-8">
          <div>
            <p className="font-semibold mb-2">Important Links</p>
            <ul className="space-y-2">
              {footerlinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:underline hover:text-gray-300 transition duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Quick Links</p>
            <ul className="space-y-2">
              {quicklinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:underline hover:text-gray-300 transition duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3: More Details */}
        <div className="flex-1">
          <p className="font-semibold mb-2">More Details</p>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
            perferendis maiores magnam nostrum deserunt voluptas, suscipit
            minima inventore blanditiis placeat excepturi sit officiis tempore
            reprehenderit, nihil eveniet soluta non veritatis laboriosam ipsa
            eaque mollitia quae!
          </p>
        </div>
      </div>
    </footer>
  );
};
