export default function FirstSection({ section }) {
  return (
    <div className="why-wrapper">
      {section.blocks.map((block) => (
        <div key={block.id}>
          <div className="why-cover-img">
            <div className="cover-overlay">
              <div>
                <h1 className="why-cover-title">{block.texts[0].text}</h1>
                <div className="why-cover-text">
                  <div>{block.texts[1].text}</div>
                  <div>{block.texts[2].text}</div>
                </div>
              </div>
            </div>
            <img
              className="cover-image"
              src={block.files[0].url}
              alt={block.files[0].alts.text}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
