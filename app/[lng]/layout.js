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

export const metadata = {
  title: "Venkon Communications",
  description: "Пиар агентство",
  openGraph: {
    title: "Рекламное Агентство в Ташкенте | Venkon Communications",
    description:
      "Venkon Communications - пиар агентство полного цикла. Команда сильных специалистов и профессионалов своего дела помогут вам продвигать ваш бизнес с максимальной отдачей.",
    url: "https://vencom.uz",
    siteName: "Venkon Communication",
    images: [
      {
        url: "/logo-1.png",
        width: 800,
        height: 600,
      },
      {
        url: "/logo-1.png",
        width: 1800,
        height: 1600,
        alt: "Venkon Communications",
      },
    ],
    locale: "uz-UZ",
    type: "website",
  },
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <>
      <html lang={lng} dir={dir(lng)}>
        <Head>
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
