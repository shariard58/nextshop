"use client";

import dynamic from "next/dynamic";
const SliderNoSSR = dynamic(() => import("react-slick"), {
  ssr: false,
});

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderNoSSR {...settings}>
      <div
        className="grid md:grid-cols-12 mt-[4px] h-[500px] w-full "
        style={{
          backgroundImage: `url("/images/banner.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="md:col-span-2"></div>
        <div className="md:col-span-8 ">
          <button className="mt-4 py-2 px-6 bg-white text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-200">
            Category
          </button>
        </div>
        <div className="md:col-span-2"></div>
      </div>
      <div
        className="grid md:grid-cols-12 mt-[4px] h-[500px]  w-full"
        style={{
          backgroundImage: `url("/images/banner.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="md:col-span-2"></div>
        <div className="md:col-span-8 ">
          <button className="mt-4 py-2 px-6 bg-white text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-200">
            Category
          </button>
        </div>
        <div className="md:col-span-2"></div>
      </div>

      <div
        className="grid md:grid-cols-12 mt-[4px] h-[500px]  w-full"
        style={{
          backgroundImage: `url("/images/banner.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="md:col-span-2"></div>
        <div className="md:col-span-8 ">
          <button className="mt-4 py-2 px-6 bg-white text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-200">
            Category
          </button>
        </div>
        <div className="md:col-span-2"></div>
      </div>
    </SliderNoSSR>
  );
}
