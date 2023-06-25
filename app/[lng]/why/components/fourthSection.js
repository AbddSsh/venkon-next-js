"use client";

import { useState } from "react";

export default function FourthSection({ section, lng }) {
  const [expandedBlocks, setExpandedBlocks] = useState(
    Array(section.blocks.length).fill(false)
  );
  const handleMouseEnter = (index) => {
    setExpandedBlocks((prevBlocks) =>
      prevBlocks.map((value, i) => (i === index ? true : false))
    );
  };
  const handleMouseLeave = (index) => {
    setExpandedBlocks((prevBlocks) =>
      prevBlocks.map((value, i) => (i === index ? false : value))
    );
  };
  return (
    <div className="why-wrapper">
      <div className="why-sec-title">
        {lng === "ru"
          ? "Среди наших проектов:"
          : lng === "en"
          ? "Among our projects:"
          : "Loyihalar orasida:"}
      </div>
      <div className="fourth-projects">
        {section.blocks.map((block, index) => (
          <div key={block.id} className="fourth-img-wrap">
            <div
              className={`fourth-text-overlay ${
                expandedBlocks[index] ? "expanded" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="fourth-text-title">{block.texts[0].text}</div>
              <div className="fourth-text-text">{block.texts[1].text}</div>
            </div>
            <img
              className="fourth-image"
              src={block.files[0].url}
              alt={block.files[0].alts.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
