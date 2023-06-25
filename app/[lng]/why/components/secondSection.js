import SwiperCarousel from "./swiperCarousel";

export default function SecondSection({ section, lng }) {
  return (
    <div className="why-wrapper">
      <div className="why-sec-title">
        {lng === "ru"
          ? "Наши возможности"
          : lng === "en"
          ? "Our possibilities"
          : "Bizning imkoniyatlarimiz"}
      </div>
      <SwiperCarousel section={section} />
    </div>
  );
}
