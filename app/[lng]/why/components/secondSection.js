"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import styles from "../styles/SecondSection.module.css";
import Image from "next/image";
import ContentAdminEdit from "@/app/adminvenkon/components/contentAdminEdit";
import ContentAdminAdd from "@/app/adminvenkon/components/contentAdminAdd";
import ContentAdminRemove from "@/app/adminvenkon/components/contentAdminRemove";

export default function SecondSection({ section, lng, pageId, isAdmin }) {
  return (
    <div className="why-wrapper">
      <h2 className={styles.why_sec_title}>
        {lng === "ru"
          ? "Наши возможности"
          : lng === "en"
          ? "Our possibilities"
          : "Bizning imkoniyatlarimiz"}
      </h2>
      {/* <SwiperCarousel section={section} /> */}
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
        {section?.blocks.map((block, index) => (
          <SwiperSlide key={index}>
            <div className={styles.sec_wrapper}>
              <h3 className={styles.sec_text}>{block?.texts[0]?.text}</h3>
              <div key={block.id} className={styles.sec_img_wrap}>
                <Image
                  className={styles.sec_image}
                  src={block?.files[0]?.url}
                  alt={block?.files[0]?.alts[0]?.text}
                  width={2000}
                  height={2000}
                />
              </div>
            </div>
            {isAdmin && (
              <div>
                <ContentAdminEdit block={block} pageId={pageId} lng={lng} />
                <ContentAdminRemove blockId={block.id} />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {isAdmin && (
        <ContentAdminAdd block={section?.blocks[0]} sectionId={section.id} />
      )}
    </div>
  );
}
