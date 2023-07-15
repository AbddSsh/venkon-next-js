"use client";

import { BsTelegram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import EmailModal from "./emailModal";
import { InstagramIcon } from "../icons/instagramIcon";
import { useState } from "react";

export default function ContactsBlock({ handleContact, lng }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="contacts-block">
      <div>
        <a
          className="call-us-btn"
          href="tel:+998907997979"
          style={{
            color: "#fff",
            textDecoration: "none",
            background: isHover ? "#5442cc" : "#463b90",
          }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {lng === "ru"
            ? "Позвоните нам"
            : lng === "en"
            ? "Call us"
            : "Bizga qo'ngíroq qiling"}
          {lng === "ru" ? (
            <BiPhoneCall size={20} style={{ marginLeft: "5px" }} />
          ) : (
            lng === "en" && (
              <BiPhoneCall size={20} style={{ marginLeft: "5px" }} />
            )
          )}
        </a>
      </div>
      <EmailModal lng={lng} onClick={handleContact} />
      <div className="contacts-media">
        <a href="https://t.me/example" target="_blank">
          <BsTelegram
            style={{
              fontSize: "32px",
              marginRight: "25px",
              color: "#0088cc",
              cursor: "pointer",
            }}
          />
        </a>
        <a href="https://instagram.com" target="_blank">
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
}
