import Image from "next/image";
import styles from "../styles/FirstHome.module.css";
import ContentAdminEdit from "@/app/adminvenkon/components/contentAdminEdit";

export default function FirstHome({ section, isAdmin, pageId, lng }) {
  return (
    <div className="why-wrapper">
      {section?.blocks?.map((block) => (
        <div key={block.id}>
          <div className={styles.first_wrapper}>
            <div className={styles.first_texts}>
              <div className={styles.first_title}>{block?.texts[0]?.text}</div>
              <div className={styles.first_text}>{block?.texts[1]?.text}</div>
            </div>
            <div className={styles.first_img_wrap}>
              <Image
                className={styles.first_image}
                src={block?.files[0]?.url}
                alt={block?.files[0]?.alts[0]?.text}
                width={300}
                height={150}
                loading="lazy"
              />
            </div>
          </div>
          {isAdmin && (
            <ContentAdminEdit
              key={block.id}
              block={block}
              pageId={pageId}
              lng={lng}
            />
          )}
        </div>
      ))}
    </div>
  );
}
