import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getSecondWhyWeData = async (id, lang) => {
  const { data } = await axios.get(
    `${baseUrl}/vencon/user/page?page_id=${id}&language=${lang}`
  );
  return data;
};
