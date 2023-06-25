import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAllPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Unable to fetch posts...");
  return response.json();
};

export const getPostBySearch = async (search) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );
  if (!response.ok) throw new Error("Unable to fetch posts...");
  return response.json();
};

export const getWhyWeData = async (id, lang) => {
  const response = await fetch(
    `${baseUrl}/vencon/user/page?page_id=${id}&language=${lang}`
  );
  if (!response.ok) throw new Error("Unable to fetch page...");
  return response.json();
};

export const getSecondWhyWeData = async (id, lang) => {
  const { data } = await axios.get(
    `${baseUrl}/vencon/user/page?page_id=${id}&language=${lang}`
  );
  return data;
};
