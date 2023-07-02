import { $host } from "./index";

export const getWhyWeData = async (id, lang) => {
  const { data } = await $host.get(
    `/vencon/user/page?page_id=${id}&language=${lang}`
  );
  return data;
};
