import Link from "next/link";

export default function WhyWe({ lng }) {
  return (
    <div>
      <Link
        className="my-link"
        href={`/${lng}/whyvenkoncommunications`}
        style={{
          color: "#463B90",
          fontWeight: "600",
          margin: "0px",
        }}
      >
        {lng === "ru"
          ? "Почему мы?"
          : lng === "en"
          ? "Why us?"
          : "Nima ushun biz?"}
      </Link>
    </div>
  );
}
