export default function FirstSection({ section }) {
  return (
    <div>
      {section.blocks.map((block) => (
        <div key={block.id}>
          {block.files.map((img) => (
            <div key={img.id} className="why-cover-img">
              <div className="image-overlay">
                <div>
                  <h1 className="why-cover-title">{block.texts[0].text}</h1>
                  <div className="why-cover-text">
                    <div>{block.texts[1].text}</div>
                    <div>{block.texts[2].text}</div>
                  </div>
                </div>
              </div>
              <img
                className="responsive-image"
                src={img.url}
                alt={img.alts.text}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
