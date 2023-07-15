"use client";

import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import ContactsBlock from "./contactsBlock";

function Contact({ lng }) {
  const [isHover, setIsHover] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleContact = () => {
    setShowContact(!showContact);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".contact-us")) {
        setShowContact(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div style={{ position: "relative" }} className="contact-us">
        <button
          className="contact-us-btn"
          onClick={handleContact}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          style={{
            background: isHover ? "#5442cc" : "#463b90",
          }}
        >
          {lng === "ru"
            ? "Связаться с нами"
            : lng === "en"
            ? "Contact Us"
            : "Biz bilan bo'glanish"}
        </button>
        <div className="contact-wrapper">
          <div
            className="contact-block"
            style={{
              display: !showContact && "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "7px",
                right: "15px",
              }}
            >
              <GrClose
                onClick={handleContact}
                style={{ cursor: "pointer", opacity: "0.4" }}
              />
            </div>
            <div className="contact-title">
              <div
                style={{
                  whiteSpace: "nowrap",
                  textAlign: "start",
                }}
              >
                {lng === "ru"
                  ? "Связаться с нами"
                  : lng === "en"
                  ? "Contact Us"
                  : "Biz bilan bo'glanish"}
              </div>
            </div>
            <ContactsBlock handleContact={handleContact} lng={lng} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
