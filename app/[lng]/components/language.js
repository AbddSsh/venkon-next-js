"use client";

import { languages } from "@/app/i18n/settings";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Language = ({ lng }) => {
  const [showLang, setShowLang] = useState(false);
  const pathname = usePathname();
  const segments = pathname.split("/");
  const path =
    segments.length > 2 ? `/${segments[segments.length - 1]}` : false;
  // const router = useRouter();
  // console.log(router);
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
      <span>{lng.toUpperCase()}</span>
      <IoIosArrowDown style={{ marginLeft: "5px" }} />
      <div className="lang" style={{ display: !showLang && "none" }}>
        {languages.map((lang) => (
          <div key={lang} className="lang__item">
            <Link
              href={path ? `/${lang + path}` : `/${lang}`}
              className="languages"
            >
              {lang.toUpperCase()}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
