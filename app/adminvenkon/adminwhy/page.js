"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../layout";
import { getWhyusPageData } from "@/services/admin";
import { useRouter } from "next/navigation";
import FirstSection from "@/app/[lng]/why/components/firstSection";
import SecondSection from "@/app/[lng]/why/components/secondSection";
import ThirdSection from "@/app/[lng]/why/components/thirdSection";
import FourthSection from "@/app/[lng]/why/components/fourthSection";
import SeoAdmin from "../components/seoAdmin";
import { getWhyWeData } from "@/services/getData";

export default function WhyUsAdmin() {
  const { isAuth } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const pageId = 3;
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const langList = ["ru", "uz", "en"];
      const promises = langList.map((lang) =>
        getWhyWeData(pageId, lang).then((data) => ({ [lang]: data }))
      );
      const results = await Promise.all(promises);
      setData(results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    typeof window !== "undefined" || (isAuth !== true && router.push("/"));
  }, []);

  return (
    <>
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
            SEO | Why us page
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
              Content | Why us page
            </div>
            <div>
              <FirstSection
                section={data[0]?.ru?.sections[0]}
                isAdmin={isAuth}
                pageId={pageId}
                lng="ru"
              />
              <FirstSection
                section={data[1]?.uz?.sections[0]}
                isAdmin={isAuth}
                pageId={pageId}
                lng="uz"
              />
              <FirstSection
                section={data[2]?.en?.sections[0]}
                isAdmin={isAuth}
                pageId={pageId}
                lng="en"
              />
            </div>
            <div>
              <SecondSection
                section={data[0]?.ru?.sections[1]}
                lng="ru"
                isAdmin={isAuth}
                pageId={pageId}
              />
              <SecondSection
                section={data[1]?.uz?.sections[1]}
                lng="uz"
                isAdmin={isAuth}
                pageId={pageId}
              />
              <SecondSection
                section={data[2]?.en?.sections[1]}
                lng="en"
                isAdmin={isAuth}
                pageId={pageId}
              />
            </div>
            <div>
              <ThirdSection
                section={data[0]?.ru?.sections[2]}
                lng="ru"
                isAdmin={isAuth}
                pageId={pageId}
              />
              <ThirdSection
                section={data[1]?.uz?.sections[2]}
                lng="uz"
                isAdmin={isAuth}
                pageId={pageId}
              />
              <ThirdSection
                section={data[2]?.en?.sections[2]}
                lng="en"
                isAdmin={isAuth}
                pageId={pageId}
              />
            </div>
            <div>
              <FourthSection
                section={data[0]?.ru?.sections[3]}
                lng="ru"
                isAdmin={isAuth}
                pageId={pageId}
              />
              <FourthSection
                section={data[1]?.uz?.sections[3]}
                lng="uz"
                isAdmin={isAuth}
                pageId={pageId}
              />
              <FourthSection
                section={data[2]?.en?.sections[3]}
                lng="en"
                isAdmin={isAuth}
                pageId={pageId}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
