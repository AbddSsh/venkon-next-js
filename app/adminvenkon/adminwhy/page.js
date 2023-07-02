"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../layout";
import { getWhyusPageData } from "@/services/admin";
import { useRouter } from "next/navigation";

export default function WhyUsAdmin() {
  const { isAuth } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const pageId = 3;

  useEffect(() => {
    const fetchData = async () => {
      const langList = ["ru", "uz", "en"];
      const promises = langList.map((lang) =>
        getWhyusPageData(pageId, lang).then((data) => ({ [lang]: data }))
      );
      const results = await Promise.all(promises);
      setData(results);
    };
    fetchData().then(console.log(data));
  });

  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.push("/");
    }
  });

  return <div>sdfsdfsdf</div>;
}
