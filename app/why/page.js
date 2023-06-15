import { getWhyWeData } from "@/services/getPosts";
import FirstSection from "./firstSection";

// async function getWhyWeData(id) {
//   const response = await fetch(
//     `${baseUrl}/vencon/user/page?page_id=${id}&language=ru`
//     // {
//     //   next: {
//     //     revalidate: 60,
//     //   },
//     // }
//   );
//   return response.json();
// }

export async function generateMetadata() {
  const pageId = 1;
  const response = await getWhyWeData(pageId);
  return {
    title: response.seo_title,
    description: response.seo_description,
    keywords: response.seo_keywords,
  };
}

export default async function WhyWe() {
  const pageId = 1;
  const response = await getWhyWeData(pageId);
  return (
    <>
      <h1>WhyWe</h1>
      <div>
        {response.sections.map((section) => (
          <div>
            <div>{section.name}</div>
            <div>
              <FirstSection section={section.blocks} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
