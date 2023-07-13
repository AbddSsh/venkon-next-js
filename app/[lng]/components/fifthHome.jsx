"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/FifthHome.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ContentAdminEdit from "@/app/adminvenkon/components/contentAdminEdit";
import ContentAdminAdd from "@/app/adminvenkon/components/contentAdminAdd";
import ContentAdminRemove from "@/app/adminvenkon/components/contentAdminRemove";

export default function FifthHome({ section, isAdmin, pageId, lng }) {
  // const CustomSwiperWrapper = styled.div`
  //   .swiper-wrapper {
  //     align-items: center;
  //   }
  //   .swiper-button-next:after,
  //   .swiper-container-rtl .swiper-button-prev:after {
  //     content: "";
  //     color: rgb(103, 39, 175);
  //     background: rgba(255, 255, 255, 0.7);
  //     padding: 80% 150% 80% 150%;
  //     border-radius: 50%;
  //     text-align: center;
  //     font-size: 4em;
  //   }
  //   .swiper-button-prev:after,
  //   .swiper-container-rtl .swiper-button-prev:after {
  //     content: "";
  //     color: rgb(103, 39, 175);
  //     background: rgba(255, 255, 255, 0.8);
  //     padding: 80% 150% 80% 150%;
  //     border-radius: 50%;
  //     text-align: center;
  //     font-size: 4em;
  //   }
  // `;
  return (
    <div className="why-wrapper">
      {/* <CustomSwiperWrapper> */}
      <div className={styles.fifth_main_title}>
        {lng === "ru"
          ? "Наши работы"
          : lng === "en"
          ? "Our works"
          : "Bizning ishlarimiz bilan tanishing"}
      </div>
      <Swiper
        className={styles.my_swiper}
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        {section?.blocks.map((block, index) => (
          <SwiperSlide key={index}>
            <div className={styles.fifth_wrapper}>
              <div className={styles.fifth_img_wrap}>
                <Image
                  className={styles.fifth_image}
                  src={block?.files[0]?.url}
                  alt={block?.files[0]?.alts[0]?.text}
                  width={300}
                  height={150}
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
      {/* </CustomSwiperWrapper> */}
    </div>
  );
}
