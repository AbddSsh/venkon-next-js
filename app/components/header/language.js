"use client";

import { languages } from "@/app/i18n/settings";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Language = ({ lng }) => {
  const [hoverStates, setHoverStates] = useState(
    languages.reduce((obj, lang) => {
      obj[lang] = false;
      return obj;
    }, {})
  );
  const [showLang, setShowLang] = useState(false);
  const pathname = usePathname();
  const segments = pathname.split("/");
  const path =
    segments.length > 2 ? `/${segments[segments.length - 1]}` : false;
  const handleLang = () => {
    setShowLang(!showLang);
  };

  const handleHover = (lang, isHovered) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [lang]: isHovered,
    }));
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
      <span>{lng.toUpperCase()}</span>
      <IoIosArrowDown style={{ marginLeft: "5px" }} />
      <div className="lang" style={{ display: !showLang && "none" }}>
        {languages.map((lang) => (
          <Link
            onMouseEnter={() => handleHover(lang, true)}
            onMouseLeave={() => handleHover(lang, false)}
            key={lang}
            href={path ? `/${lang + path}` : `/${lang}`}
            className="languages"
            style={{
              color:
                lng === lang || hoverStates[lang]
                  ? "rgb(68, 180, 255)"
                  : "rgb(100,100,100)",
            }}
          >
            <div className="lang__item">{lang.toUpperCase()}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Language;
