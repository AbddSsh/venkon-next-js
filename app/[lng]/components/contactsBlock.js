import { BsTelegram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import EmailModal from "./emailModal";

export default function ContactsBlock({ handleContact, lng }) {
  return (
    <div className="contacts-block">
      <div style={{ textAlign: "center" }}>
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
          <RiInstagramFill
            style={{
              fontSize: "36px",
              color: "#e4405f",
              cursor: "pointer",
            }}
          />
        </a>
      </div>
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
    </div>
  );
}
