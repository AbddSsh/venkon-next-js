"use client";

import { languages } from "@/app/i18n/settings";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const BurgerLanguage = ({ lng }) => {
  const [showLang, setShowLang] = useState(false);
  const pathname = usePathname();
  const segments = pathname.split("/");
  const path =
    segments.length > 2 ? `/${segments[segments.length - 1]}` : false;

  return (
    <div className="burger-lang__block">
      <div className="burger-lang">
        {languages.map((lang) => (
          <Link
            key={lang}
            href={path ? `/${lang + path}` : `/${lang}`}
            className="languages"
            style={{
              color: lng === lang ? "rgb(68, 180, 255)" : "rgb(100,100,100)",
            }}
          >
            <div
              key={lang}
              className="burger-lang__item"
              style={{
                border: `0.5px solid ${
                  lng === lang ? "rgba(68, 180, 255, 1)" : "rgba(30,30,30,0.3)"
                }`,
                marginLeft: lang === "ru" && "0px",
              }}
            >
              {lang.toUpperCase()}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BurgerLanguage;
