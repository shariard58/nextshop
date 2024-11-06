/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
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
      <div>
        <img
          className="md:h-[500px] lg:h-[600px]"
          src="/images/banner.jpg"
          alt="img"
        />
      </div>
      <div>
        <img
          className="md:h-[500px] lg:h-[600px]"
          src="/images/banner.jpg"
          alt="img"
        />
      </div>
      <div>
        <img
          className="md:h-[500px] lg:h-[600px]"
          src="/images/banner.jpg"
          alt="img"
        />
      </div>

      <div>
        <img
          className="md:h-[500px] lg:h-[600px]"
          src="/images/banner.jpg"
          alt="img"
        />
      </div>
      <div>
        <img
          className="md:h-[500px] lg:h-[600px]"
          src="/images/banner.jpg"
          alt="img"
        />
      </div>
      <div>
        <img
          className="md:h-[500px] lg:h-[600px]"
          src="/images/banner.jpg"
          alt="img"
        />
      </div>

      <div>
        <img
          className="md:h-[500px] lg:h-[600px]"
          src="/images/banner.jpg"
          alt="img"
        />
      </div>
    </Slider>
  );
}
