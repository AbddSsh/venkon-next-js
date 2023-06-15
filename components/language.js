"use client";

import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Language = () => {
  const [selectedLang, setSelectedLang] = useState("RU");
  const [showLang, setShowLang] = useState(false);
  const handleLang = () => {
    setShowLang(!showLang);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".lang__block")) {
        setShowLang(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div onClick={handleLang} className="lang__block">
      <span>{selectedLang}</span>
      <IoIosArrowDown style={{ marginLeft: "5px" }} />
      <div className="lang" style={{ display: !showLang && "none" }}>
        <div
          onClick={() => {
            setSelectedLang("RU");
          }}
          className="lang__item"
        >
          RU
        </div>
        <div
          onClick={() => {
            setSelectedLang("UZ");
          }}
          className="lang__item"
        >
          UZ
        </div>
        <div
          onClick={() => {
            setSelectedLang("EN");
          }}
          className="lang__item"
        >
          EN
        </div>
      </div>
    </div>
  );
};

export default Language;
