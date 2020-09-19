// Import Swiper React components
import React from "react";
import SwiperCore, { Navigation, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "./styles.scss";

SwiperCore.use([Navigation, EffectCoverflow]);

const slidesImages = ["images/slider/slide-1.jpg", "images/slider/slide-2.jpg"];
const sildes = slidesImages.map((imagePath) => (
  <SwiperSlide key={imagePath}>
    <Link to="movie/tt1650062" className="slider-link">
      <img className="slider-image" src={imagePath} alt={imagePath} />
    </Link>
  </SwiperSlide>
));

export default ({ collapse = false }) => {
  return (
    <div className="silder-wrapper">
      <Swiper
        id="header-slider"
        className={collapse ? "collapse" : ""}
        effect="coverflow"
        speed={700}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        <div className="swiper-button-prev">
          <span className="swiper-button-title">Prev</span>
        </div>
        <div className="swiper-button-next">
          <span className="swiper-button-title">Next</span>
        </div>
        {sildes}
      </Swiper>
    </div>
  );
};
