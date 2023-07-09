import { $host } from "./index";

// export const getWhyWeData = async (id, lang) => {
//   const { data } = await $host.get(
//     `/vencon/user/page?page_id=${id}&language=${lang}`,
//   );
//   return data;
// };

export const getWhyWeData = async (id, lang) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/vencon/user/page?page_id=${id}&language=${lang}`,
    { next: { revalidate: 0 } }
  );
  const data = await response.json();
  return data;
};
