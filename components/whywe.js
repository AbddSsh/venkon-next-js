import Link from "next/link";

export default function WhyWe() {
  return (
    <Link
      className="my-link"
      href="/why"
      style={{
        color: "#463B90",
        fontWeight: "600",
      }}
    >
      Почему мы?
    </Link>
  );
}
