import Image from "next/image";
import styles from "../styles/FirstSection.module.css";
import ContentAdmin from "@/app/adminvenkon/components/contentAdmin";

export default function FirstSection({ section, isAdmin, pageId, lng }) {
  return (
    <div className="why-wrapper">
      {section?.blocks.map((block) => (
        <div key={block.id}>
          <div className={styles.why_cover_img}>
            <div className={styles.cover_overlay}>
              <div>
                <h1 className={styles.why_cover_title}>
                  {block.texts[0].text}
                </h1>
                <div className={styles.why_cover_text}>
                  <div>{block.texts[1].text}</div>
                  <div>{block.texts[2].text}</div>
                </div>
              </div>
            </div>
            <Image
              className={styles.cover_image}
              src={block.files[0].url}
              alt={block.files[0].alts.text}
              width={300}
              height={150}
              loading="lazy"
            />
          </div>
        </div>
      ))}
      {isAdmin && (
        <div>
          {section?.blocks.map((block) => (
            <ContentAdmin
              key={block.id}
              block={block}
              pageId={pageId}
              lng={lng}
            />
          ))}
        </div>
      )}
    </div>
  );
}
