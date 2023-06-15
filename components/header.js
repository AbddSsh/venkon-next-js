import Link from "next/link";
import Contact from "./contact";
import Language from "./language";
import Burger from "./burger";
import WhyWe from "./whywe";

const TheHeader = async () => {
  // async function changeLang(lang) {
  //   "use server";
  //   console.log(lang);
  // }
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
          <Link className="my-link" href="/">
            <img
              style={{
                width: "100%",
              }}
              src="https://static.wixstatic.com/media/474cdc_1d4329a980d54079b9bb30fd80b3f2f1~mv2.png/v1/fit/w_2500,h_1330,al_c/474cdc_1d4329a980d54079b9bb30fd80b3f2f1~mv2.png"
              alt="альтернативный текст"
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
              <WhyWe />
            </div>

            <Contact />
          </div>
          <div className="lang-desktop">
            <Language />
          </div>
          <div className="burger-desktop">
            <Burger />
          </div>
        </div>
      </div>
    </header>
  );
};

export { TheHeader };
