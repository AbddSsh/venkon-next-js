import { TheHeader } from "@/app/components/header/header";
import "../global.css";
import { TheFooter } from "@/app/components/footer";
import { dir } from "i18next";
import Head from "next/head";
import { languages } from "../i18n/settings";
import "bootstrap/dist/css/bootstrap.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

// export const metadata = {
//   title: "Venkon Communications",
//   description: "Пиар агентство",
//   openGraph: {
//     title: "Рекламное Агентство в Ташкенте | Venkon Communications",
//     description:
//       "Venkon Communications - пиар агентство полного цикла. Команда сильных специалистов и профессионалов своего дела помогут вам продвигать ваш бизнес с максимальной отдачей.",
//     url: "https://vencom.uz",
//     siteName: "Venkon Communication",
//     images: [
//       {
//         url: "https://static.wixstatic.com/media/474cdc_1d4329a980d54079b9bb30fd80b3f2f1%7Emv2.png/v1/fit/w_2500,h_1330,al_c/474cdc_1d4329a980d54079b9bb30fd80b3f2f1%7Emv2.png",
//         width: 800,
//         height: 600,
//       },
//       {
//         url: "https://static.wixstatic.com/media/474cdc_1d4329a980d54079b9bb30fd80b3f2f1%7Emv2.png/v1/fit/w_2500,h_1330,al_c/474cdc_1d4329a980d54079b9bb30fd80b3f2f1%7Emv2.png",
//         width: 1800,
//         height: 1600,
//         alt: "Venkon Communications",
//       },
//     ],
//     locale: "uz-UZ",
//     type: "website",
//   },
// };

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <>
      <html lang={lng} dir={dir(lng)}>
        <Head>
          <meta
            property="og:title"
            content="Рекламное Агентство в Ташкенте | Venkon Communications"
          />
          <meta
            property="og:description"
            content="Venkon Communications - пиар агентство полного цикла. Команда сильных специалистов и профессионалов своего дела помогут вам продвигать ваш бизнес с максимальной отдачей."
          />
          <meta property="og:url" content="https://vencom.uz/" />
          <meta property="og:site_name" content="Venkon Communication" />
          <meta property="og:locale" content="uz-UZ" />
          <meta
            property="og:image:url"
            content="https://static.wixstatic.com/media/474cdc_1d4329a980d54079b9bb30fd80b3f2f1%7Emv2.png/v1/fit/w_2500,h_1330,al_c/474cdc_1d4329a980d54079b9bb30fd80b3f2f1%7Emv2.png"
          />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />
          <meta
            property="og:image:url"
            content="https://static.wixstatic.com/media/474cdc_1d4329a980d54079b9bb30fd80b3f2f1%7Emv2.png/v1/fit/w_2500,h_1330,al_c/474cdc_1d4329a980d54079b9bb30fd80b3f2f1%7Emv2.png"
          />
          <meta property="og:image:width" content="1800" />
          <meta property="og:image:height" content="1600" />
          <meta property="og:image:alt" content="Venkon Communications" />
          <meta property="og:type" content="website" />
          {/* <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossOrigin="anonymous"
          /> */}
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          /> */}
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <main className="wrapper">
            <TheHeader lng={lng} />
            <div className="my-container">{children}</div>
            <TheFooter lng={lng} />
          </main>
        </body>
      </html>
    </>
  );
}
