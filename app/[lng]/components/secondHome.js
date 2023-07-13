"use client";

import Image from "next/image";
import styles from "../styles/SecondHome.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ContentAdminEdit from "@/app/adminvenkon/components/contentAdminEdit";
import ContentAdminAdd from "@/app/adminvenkon/components/contentAdminAdd";
import ContentAdminRemove from "@/app/adminvenkon/components/contentAdminRemove";

export default function SecondHome({ section, lng, pageId, isAdmin }) {
  return (
    <div className="why-wrapper">
      <h2 className={styles.second_main_title}>
        {lng === "ru"
          ? "Что мы делаем?"
          : lng === "en"
          ? "What we do?"
          : "Bizning faoliyatimiz haqida"}
      </h2>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        {section?.blocks.map((block, index) => (
          <SwiperSlide key={index}>
            <div className={styles.second_wrapper}>
              <div className={styles.second_texts}>
                <div className={styles.second_title}>
                  {block?.texts[0]?.text}
                </div>
                <div className={styles.second_text}>
                  {block?.texts[1]?.text}
                </div>
              </div>
              <div className={styles.second_img_wrap}>
                <Image
                  className={styles.second_image}
                  src={block?.files[0]?.url}
                  alt={block?.files[0]?.alts[0]?.text}
                  width={300}
                  height={150}
                />
              </div>
            </div>
            <div className={styles.second_wrapper_mobile}>
              <div className={styles.second_title}>{block?.texts[0]?.text}</div>
              <div className={styles.second_textimg}>
                <div className={styles.second_text}>
                  {block?.texts[1]?.text}
                </div>
                <div className={styles.second_img_wrap}>
                  <Image
                    className={styles.second_image}
                    src={block?.files[0]?.url}
                    alt={block?.files[0]?.alts[0]?.text}
                    width={300}
                    height={150}
                  />
                </div>
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
