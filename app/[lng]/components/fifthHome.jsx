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
import { useMediaQuery } from "react-responsive";

export default function FifthHome({ section, isAdmin, pageId, lng }) {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  return (
    <div className="why-wrapper">
      <h2 className={styles.fifth_main_title}>
        {lng === "ru"
          ? "Наши работы"
          : lng === "en"
          ? "Our works"
          : "Bizning ishlarimiz bilan tanishing"}
      </h2>
      <Swiper
        className={styles.my_swiper}
        slidesPerView={isMobile ? 1.1 : 1}
        loop={true}
        navigation={isMobile ? false : true}
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
                  width={1500}
                  height={1500}
                />
              </div>
            </div>
            {isAdmin && (
              <div>
                <ContentAdminEdit block={block} pageId={pageId} lng={lng} />
                <ContentAdminRemove blockId={block.id} pageId={pageId} />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {isAdmin && (
        <ContentAdminAdd
          block={section?.blocks[0]}
          sectionId={section.id}
          pageId={pageId}
        />
      )}
    </div>
  );
}
