"use client";

import { useEffect, useState } from "react";
import ContactsBlock from "./contactsBlock";
import Language from "./language";
import WhyWe from "./whywe";
import { GrClose } from "react-icons/gr";
import BurgerLanguage from "./burgerLanguage";

const Burger = ({ lng = { lng } }) => {
  const [showBurger, setShowBurger] = useState(false);
  const handleBurger = () => {
    setShowBurger(!showBurger);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".burger")) {
        setShowBurger(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div>
      <div className="burger">
        <div className="burger-btn" onClick={handleBurger}>
          <span />
        </div>
        <div className={showBurger ? "burger-body active" : "burger-body"}>
          <div
            className="burger-wrapper"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                position: "relative",
                alignSelf: "end",
              }}
            >
              <GrClose className="burger-hide-btn" onClick={handleBurger} />
            </div>
            <div className="burger-language">
              <BurgerLanguage lng={lng} />
            </div>
            <div onClick={handleBurger} className="whywe__block">
              <WhyWe lng={lng} />
            </div>
            <ContactsBlock lng={lng} handleBurger={handleBurger} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
