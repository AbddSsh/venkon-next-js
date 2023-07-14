"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../layout";
import { useRouter } from "next/navigation";
import SeoAdmin from "../components/seoAdmin";
import { getData } from "@/services/getData";
import FirstHome from "@/app/[lng]/components/firstHome";
import SecondHome from "@/app/[lng]/components/secondHome";
import ThirdHome from "@/app/[lng]/components/thirdHome";
import FourthHome from "@/app/[lng]/components/fourthHome";
import FifthHome from "@/app/[lng]/components/fifthHome";
import SixthHome from "@/app/[lng]/components/sixthHome";
import SeventhHome from "@/app/[lng]/components/seventhHome";

export default function HomeAdmin() {
  const { isAuth } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const pageId = 4;
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const langList = ["ru", "uz", "en"];
      const promises = langList.map((lang) =>
        getData(pageId, lang).then((data) => ({ [lang]: data }))
      );
      const results = await Promise.all(promises);
      setData(results);
    };
    fetchData();
  }, []);

  return (
    <>
      {isAuth ? (
        <div>
          {data === null ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              <div
                style={{
                  marginBottom: "20px",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                SEO | Home page
              </div>
              <SeoAdmin seo={data[0]?.ru} lng="ru" pageId={pageId} />
              <SeoAdmin seo={data[1]?.uz} lng="uz" pageId={pageId} />
              <SeoAdmin seo={data[2]?.en} lng="en" pageId={pageId} />
              <div>
                <div
                  style={{
                    marginBottom: "20px",
                    textAlign: "center",
                    fontWeight: "700",
                  }}
                >
                  Content | Home page
                </div>
                <div>
                  <FirstHome
                    section={data[0]?.ru?.sections[0]}
                    isAdmin={isAuth}
                    pageId={pageId}
                    lng="ru"
                  />
                  <FirstHome
                    section={data[1]?.uz?.sections[0]}
                    isAdmin={isAuth}
                    pageId={pageId}
                    lng="uz"
                  />
                  <FirstHome
                    section={data[2]?.en?.sections[0]}
                    isAdmin={isAuth}
                    pageId={pageId}
                    lng="en"
                  />
                </div>
                <div>
                  <SecondHome
                    section={data[0]?.ru?.sections[1]}
                    lng="ru"
                    isAdmin={isAuth}
                    pageId={pageId}
                  />
                  <SecondHome
                    section={data[1]?.uz?.sections[1]}
                    lng="uz"
                    isAdmin={isAuth}
                    pageId={pageId}
                  />
                  <SecondHome
                    section={data[2]?.en?.sections[1]}
                    lng="en"
                    isAdmin={isAuth}
                    pageId={pageId}
                  />
                </div>
                <div>
                  <ThirdHome
                    section={data[0]?.ru?.sections[2]}
                    lng="ru"
                    isAdmin={isAuth}
                    pageId={pageId}
                  />
                  <ThirdHome
                    section={data[1]?.uz?.sections[2]}
                    lng="uz"
                    isAdmin={isAuth}
                    pageId={pageId}
                  />
                  <ThirdHome
                    section={data[2]?.en?.sections[2]}
                    lng="en"
                    isAdmin={isAuth}
                    pageId={pageId}
                  />
                </div>
                <div>
                  <FourthHome
                    section={data[0]?.ru?.sections[3]}
                    lng="ru"
                    isAdmin={isAuth}
                    pageId={pageId}
                  />
                  <FourthHome
                    section={data[1]?.uz?.sections[3]}
                    lng="uz"
                    isAdmin={isAuth}
                    pageId={pageId}
                  />
                  <FourthHome
                    section={data[2]?.en?.sections[3]}
                    lng="en"
                    isAdmin={isAuth}
                    pageId={pageId}
                  />
                </div>
                <div>
                  <FifthHome
                    section={data[0]?.ru?.sections[4]}
                    lng="ru"
                    isAdmin={isAuth}
                    pageId={pageId}
                  />
                  <FifthHome
                    section={data[1]?.uz?.sections[4]}
                    lng="uz"
                    isAdmin={isAuth}
                    pageId={pageId}
                  />
                  <FifthHome
                    section={data[2]?.en?.sections[4]}
                    lng="en"
                    isAdmin={isAuth}
                    pageId={pageId}
                  />
                </div>
                <div>
                  <SixthHome
                    section={data[0]?.ru?.sections[5]}
                    lng="ru"
                    isAdmin={isAuth}
                    pageId={pageId}
                  />
                  <SixthHome
                    section={data[1]?.uz?.sections[5]}
                    lng="uz"
                    isAdmin={isAuth}
                    pageId={pageId}
                  />
                  <SixthHome
                    section={data[2]?.en?.sections[5]}
                    lng="en"
                    isAdmin={isAuth}
                    pageId={pageId}
                  />
                </div>
                <div>
                  <SeventhHome
                    section={data[0]?.ru?.sections[6]}
                    lng="ru"
                    isAdmin={isAuth}
                    pageId={pageId}
                  />
                  <SeventhHome
                    section={data[1]?.uz?.sections[6]}
                    lng="uz"
                    isAdmin={isAuth}
                    pageId={pageId}
                  />
                  <SeventhHome
                    section={data[2]?.en?.sections[6]}
                    lng="en"
                    isAdmin={isAuth}
                    pageId={pageId}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>Вы не админ...</div>
      )}
    </>
  );
}
