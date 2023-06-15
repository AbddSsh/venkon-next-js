export default function FirstSection({ section }) {
  return (
    <div>
      {section.map((block) => (
        <div>
          {block.name}
          <div>
            {block.texts.map((text) => (
              <div>{text.text}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
