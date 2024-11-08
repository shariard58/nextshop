/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export default function SliderBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidersToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div className="w-full relative h-[450px] md:h-[500px]">
        <Image
          className="w-full relative h-full"
          src="/images/banner.jpg"
          alt="img"
          layout="fill"
        />
      </div>
      <div className="w-full relative h-[450px] md:h-[500px]">
        <Image
          className="w-full relative h-full"
          src="/images/banner.jpg"
          alt="img"
          layout="fill"
        />
      </div>
      <div className="w-full relative h-[450px] md:h-[500px]">
        <Image
          className="w-full relative h-full"
          src="/images/banner.jpg"
          alt="img"
          layout="fill"
        />
      </div>

      <div className="w-full relative h-[450px] md:h-[500px]">
        <Image
          className="w-full relative h-full"
          src="/images/banner.jpg"
          alt="img"
          layout="fill"
        />
      </div>
      <div className="w-full relative h-[450px] md:h-[500px]">
        <Image
          className="w-full relative h-full"
          src="/images/banner.jpg"
          alt="img"
          layout="fill"
        />
      </div>
      <div className="w-full relative h-[450px] md:h-[500px]">
        <Image
          className="w-full relative h-full"
          src="/images/banner.jpg"
          alt="img"
          layout="fill"
        />
      </div>

      <div className="w-full relative h-[450px] md:h-[500px]">
        <Image
          className="w-full relative h-full"
          src="/images/banner.jpg"
          alt="img"
          layout="fill"
        />
      </div>
    </Slider>
  );
}
