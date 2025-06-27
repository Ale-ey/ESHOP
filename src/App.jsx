import "./app.css";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Category } from "./components/Category/Category";
import { Category2 } from "./components/Category/Category2";
import { Services } from "./components/Services/Services";
import { Banner } from "./components/Banner/Banner";
import { Products } from "./components/Products/Products";
import { Blog } from "./components/Blog/Blog";
import { Partners } from "./components/Partners/Partners";
import { Footer } from "./components/Footer/Footer";
import { PopUp } from "./components/PopUp/PopUp";
import headphone from "./assets/hero/image1.png";
import watch from "./assets/category/smartwatch2-removebg-preview.png";
import AOS from "aos";
import "aos/dist/aos.css";
const bannerData = [
  {
    discount: "30% OFF",
    title: "Fine Smile with us",
    date: "10 JAN to 28 JAN",
    img: headphone,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, porro.",
    bg_color: "bg-primary",
    buttonText: "primary",
  },
  {
    discount: "60% OFF",
    title: "Happy Hours be on Time",
    date: "20 JAN to 15 Feb",
    img: watch,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, porro.",
    bg_color: "bg-brandGreen",
    buttonText: "brandGreen",
  },
];

function App() {
  const [orderPopup, setorderPopup] = useState(false);
  const handleorderPopup = () => {
    setorderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 duration-200 overflow-hidden ">
      <Navbar handleorderPopup={handleorderPopup} />
      <Hero handleorderPopup={handleorderPopup} />
      <Category handleorderPopup={handleorderPopup} />
      <Category2 handleorderPopup={handleorderPopup} />
      <Services />
      <Banner handleorderPopup={handleorderPopup} data={bannerData[0]} />
      <Products handleorderPopup={handleorderPopup}></Products>
      <Banner handleorderPopup={handleorderPopup} data={bannerData[1]} />
      <Blog></Blog>
      <Partners></Partners>
      <Footer></Footer>
      <PopUp orderPopup={orderPopup} setorderPopup={setorderPopup}></PopUp>
    </div>
  );
}

export default App;
