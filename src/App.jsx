import "./app.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Category } from "./components/Category/Category";
import { Category2 } from "./components/Category/Category2";
import { Services } from "./components/Services/Services";
import { Banner } from "./components/Banner/Banner";
import { Products } from "./components/Products/Products";
import headphone from "./assets/hero/image1.png";

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
    bg_color: "primary",
  },
  {
    discount: "60% OFF",
    title: "Happy Hours be on Time",
    date: "20 JAN to 15 Feb",
    img: headphone,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, porro.",
    bg_color: "brandGreen",
  },
];

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 duration-200 overflow-hidden px-4">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={bannerData[0]} />
      <Products></Products>
      <Banner data={bannerData[1]} />
    </div>
  );
}

export default App;
