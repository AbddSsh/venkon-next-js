"use client";

import { useState } from "react";
import styles from "../styles/FourthSection.module.css";
import titleStyle from "../styles/SecondSection.module.css";
import Image from "next/image";
import ContentAdminEdit from "@/app/adminvenkon/components/contentAdminEdit";
import ContentAdminAdd from "@/app/adminvenkon/components/contentAdminAdd";

export default function FourthSection({ section, lng, pageId, isAdmin }) {
  const [expandedBlocks, setExpandedBlocks] = useState(
    Array(section?.blocks.length).fill(false)
  );
  const handleMouseEnter = (index) => {
    setExpandedBlocks((prevBlocks) =>
      prevBlocks.map((value, i) => (i === index ? true : false))
    );
  };
  const handleMouseLeave = (index) => {
    setExpandedBlocks((prevBlocks) =>
      prevBlocks.map((value, i) => (i === index ? false : value))
    );
  };
  return (
    <div className="why-wrapper">
      <div className={titleStyle.why_sec_title}>
        {lng === "ru"
          ? "Среди наших проектов:"
          : lng === "en"
          ? "Among our projects:"
          : "Loyihalar orasida:"}
      </div>
      <div className={styles.fourth_projects}>
        {section?.blocks.map((block, index) => (
          <div key={block.id}>
            <div className={styles.fourth_img_wrap}>
              <div
                className={`${styles.fourth_text_overlay} ${
                  expandedBlocks[index] ? styles.expanded : ""
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onTouchStart={() => handleMouseEnter(index)}
              >
                <div className={styles.fourth_text_title}>
                  {block.texts[0].text}
                </div>
                <div className={styles.fourth_text_text}>
                  {block.texts[1].text}
                </div>
              </div>
              <Image
                className={styles.fourth_image}
                src={block?.files[0]?.url}
                alt={block?.files[0]?.alts[0]?.text}
                width={300}
                height={150}
                loading="lazy"
              />
            </div>
            <div style={{ marginBottom: "20px", marginTop: "-5px" }}>
              {isAdmin && (
                <div>
                  <ContentAdminEdit block={block} pageId={pageId} lng={lng} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {isAdmin && (
        <ContentAdminAdd
          block={section?.blocks[0]}
          pageId={pageId}
          lng={lng}
          sectionId={section.id}
        />
      )}
    </div>
  );
}
