import ContentAdminEdit from "@/app/adminvenkon/components/contentAdminEdit";
import styles from "../styles/FourthHome.module.css";

export default function FourthHome({ section, isAdmin, pageId, lng }) {
  return (
    <div className="why-wrapper">
      <div className={styles.fourth_title_block}>
        <div className={styles.fourth_main_title}>
          {lng === "ru"
            ? "Наши услуги"
            : lng === "en"
            ? "Our services"
            : "Bizning xizmatlar"}
        </div>
        <div className={styles.fourth_sec_title}>
          {lng === "ru"
            ? "Вот еще некоторые наши возможности:"
            : lng === "en"
            ? "Here are some of our other options:"
            : "Bizning ayrim boshqa imkoniyatlarimiz bilan tanishing:"}
        </div>
      </div>
      <div className={styles.fourth_wrapper}>
        {section?.blocks.map((block, index) => (
          <div
            key={block.id}
            className={styles.fourth_block}
            style={{
              background:
                index === 0 ? "#EEF8FF" : index === 1 ? "#EEF2FF" : "#F5EEFF",
            }}
          >
            <div className={styles.fourth_title}>{block?.texts[0].text}</div>
            <div className={styles.fourth_text_wrap}>
              <div className={styles.fourth_text}>{block?.texts[1].text}</div>
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
