import { BsTelegram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import EmailModal from "./emailModal";
import { InstagramIcon } from "../icons/instagramIcon";

export default function ContactsBlock({ handleContact, lng }) {
  return (
    <div className="contacts-block">
      <div>
        <a
          className="call-us-btn"
          href="tel:+998901234567"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          {lng === "ru"
            ? "Позвоните нам"
            : lng === "en"
            ? "Call us"
            : "Bizga qo'ngíroq qiling"}
          {lng === "ru" ? (
            <BiPhoneCall size={20} />
          ) : (
            lng === "en" && <BiPhoneCall size={20} />
          )}
        </a>
      </div>
      <EmailModal lng={lng} onClick={handleContact} />
      <div className="contacts-media">
        <a href="https://t.me/example" target="_blank">
          <BsTelegram
            style={{
              fontSize: "32px",
              marginRight: "15px",
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
