import Link from "next/link";

export default function AboutLayout({ children }) {
  return (
    <div>
      <h1>About Us</h1>
      <ul>
        <li>
          <Link className="my-link" href="/about/contact">
            Contacts
          </Link>
        </li>
        <li>
          <Link className="my-link" href="/about/team">
            Team
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
