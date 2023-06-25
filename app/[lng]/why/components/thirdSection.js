export default function ThirdSection({ section, lng }) {
  return (
    <div className="why-wrapper">
      <div className="third-wrapper">
        <div className="third-img-wrap">
          <img
            className="third-image"
            src={section.blocks[0].files[0].url}
            alt={section.blocks[0].files[0].alts.text}
          />
        </div>
        <div className="third-text">{section.blocks[0].texts[0].text}</div>
      </div>
    </div>
  );
}
