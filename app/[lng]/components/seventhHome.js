import ContentAdminEdit from "@/app/adminvenkon/components/contentAdminEdit";
import styles from "../styles/SeventhHome.module.css";
import ContentAdminAdd from "@/app/adminvenkon/components/contentAdminAdd";
import ContentAdminRemove from "@/app/adminvenkon/components/contentAdminRemove";

export default function SeventhHome({ section, isAdmin, pageId, lng }) {
  return (
    <div className="why-wrapper">
      <div className={styles.seventh_wrapper}>
        {section?.blocks.map((block, index) => (
          <div
            key={block.id}
            className={styles.seventh_block}
            style={{
              background:
                index === 0 ? "#EEF8FF" : index === 1 ? "#EEF2FF" : "#F5EEFF",
            }}
          >
            <h3 className={styles.seventh_title}>{block?.texts[0].text}</h3>
            <div className={styles.seventh_text_wrap}>
              <p className={styles.seventh_text}>{block?.texts[1].text}</p>
            </div>
            {isAdmin && (
              <div>
                <ContentAdminEdit block={block} pageId={pageId} lng={lng} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
