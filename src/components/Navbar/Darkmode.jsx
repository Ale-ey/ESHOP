import { useState, useEffect } from "react";
import lightButton from "../../assets/button/lightButton.png";
import black from "../../assets/button/black.png";

export const Darkmode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  });

  return (
    <div>
      <img
        onClick={handleToggle}
        src={lightButton}
        alt=""
        className={`w-12 absolute cursor-pointer ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } duration-300 transition-all`}
      />
      <img
        onClick={handleToggle}
        src={black}
        alt=""
        className={`w-12 cursor-pointer ${
          theme === "light" ? "opacity-0" : "opacity-100"
        } duration-300 transition-all`}
      />
    </div>
  );
};
