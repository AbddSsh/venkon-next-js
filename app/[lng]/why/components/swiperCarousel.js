"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

const SwiperCarousel = ({ section }) => {
  return (
    <div>
      {/* <Swiper
        slidesPerView={2}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        {section.blocks.map((block, index) => (
          <SwiperSlide key={index}>
            <div key={block.id} className="sec-img-wrap">
              <div className="sec-overlay">
                <div className="sec-text">{block.texts[0].text}</div>
              </div>
              <img
                className="sec-image"
                src={block.files[0].url}
                alt={block.files[0].alts.text}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        {section.blocks.map((block, index) => (
          <SwiperSlide key={index}>
            <div className="sec-wrapper">
              <div className="sec-text">{block.texts[0].text}</div>
              <div key={block.id} className="sec-img-wrap">
                <img
                  className="sec-image"
                  src={block.files[0].url}
                  alt={block.files[0].alts.text}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
