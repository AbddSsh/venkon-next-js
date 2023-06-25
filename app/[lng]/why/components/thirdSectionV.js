export default function ThirdSectionV({ section, lng }) {
  return (
    <div className="why-wrapper">
      <div className="third__wrapper">
        <div className="third-img-wrap">
          <div className="third-text-overlay">
            <div className="third-text">{section.blocks[0].texts[0].text}</div>
          </div>
          <img
            className="third-image"
            src={section.blocks[0].files[0].url}
            alt={section.blocks[0].files[0].alts.text}
          />
        </div>
      </div>
    </div>
  );
}
