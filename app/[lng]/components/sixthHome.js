import Image from "next/image";
import styles from "../styles/SixthHome.module.css";
import ContentAdminEdit from "@/app/adminvenkon/components/contentAdminEdit";

export default function SixthHome({ section, isAdmin, pageId, lng }) {
  return (
    <div className="why-wrapper">
      {section?.blocks?.map((block) => (
        <div key={block.id}>
          <div className={styles.sixth_wrapper}>
            <div className={styles.sixth_texts}>
              <h1 className={styles.sixth_title}>{block?.texts[0]?.text}</h1>
            </div>
            {/* <div className={styles.sixth_img_wrap}>
              <Image
                className={styles.sixth_image}
                src={block?.files[0]?.url}
                alt={block?.files[0]?.alts[0]?.text}
                width={500}
                height={500}
                loading="lazy"
              />
            </div> */}
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
