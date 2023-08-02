import Link from "next/link";
import Contact from "./contact";
import Language from "./language";
import Burger from "./burger/burger";
import WhyWe from "./whywe";
import Image from "next/image";

const TheHeader = async ({ lng }) => {
  return (
    <header>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="my-container"
      >
        <div className="img-block">
          <Link className="my-link" href={`/${lng}`}>
            <img
              style={{
                width: "100%",
              }}
              src="/logo-1.png"
              alt="логотип Venkon Communications"
              className="logo-header"
            />
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              marginRight: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="whywe-desktop">
              <WhyWe lng={lng} />
            </div>
            <Contact lng={lng} />
          </div>
          <div className="lang-desktop">
            <Language lng={lng} />
          </div>
          <div className="burger-desktop">
            <Burger lng={lng} />
          </div>
        </div>
      </div>
    </header>
  );
};

export { TheHeader };
