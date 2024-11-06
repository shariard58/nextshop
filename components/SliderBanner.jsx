/* eslint-disable react/jsx-no-undef */
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
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
      <div>
        <img className="h-[500px]" src="/images/banner.jpg" alt="img" />
      </div>
      <div>
        <img className="h-[500px]" src="/images/banner.jpg" alt="img" />
      </div>
      <div>
        <img className="h-[500px]" src="/images/banner.jpg" alt="img" />
      </div>

      <div>
        <img className="h-[500px]" src="/images/banner.jpg" alt="img" />
      </div>
      <div>
        <img className="h-[500px]" src="/images/banner.jpg" alt="img" />
      </div>
      <div>
        <img className="h-[500px]" src="/images/banner.jpg" alt="img" />
      </div>

      <div>
        <img className="h-[500px]" src="/images/banner.jpg" alt="img" />
      </div>
    </Slider>
  );
}
