import Image from "next/image";
import styles from "../styles/FirstSection.module.css";
import ContentAdminEdit from "@/app/adminvenkon/components/contentAdminEdit";

export default function FirstSection({ section, isAdmin, pageId, lng }) {
  return (
    <div className="why-wrapper">
      {section?.blocks.map((block) => (
        <div key={block.id}>
          <div className={styles.why_cover_img}>
            <div className={styles.cover_overlay}>
              <div>
                <h1 className={styles.why_cover_title}>
                  {block?.texts[0]?.text}
                </h1>
                <div className={styles.why_cover_text}>
                  <p>{block?.texts[1]?.text}</p>
                  <p>{block?.texts[2]?.text}</p>
                </div>
              </div>
            </div>
            <Image
              className={styles.cover_image}
              src={block?.files[0]?.url}
              alt={block?.files[0]?.alts[0]?.text}
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
            <ContentAdminEdit
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
