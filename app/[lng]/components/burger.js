"use client";

import { useEffect, useState } from "react";
import ContactsBlock from "./contactsBlock";
import Language from "./language";
import WhyWe from "./whywe";
import { GrClose } from "react-icons/gr";

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
            style={{
              position: "relative",
              alignSelf: "end",
            }}
          >
            <GrClose className="burger-hide-btn" onClick={handleBurger} />
          </div>
          <div style={{ alignSelf: "end", marginTop: "-10px" }}>
            <Language lng={lng} />
          </div>
          <div onClick={handleBurger}>
            <WhyWe lng={lng} />
          </div>
          <ContactsBlock lng={lng} />
        </div>
      </div>
    </div>
  );
};

export default Burger;
