import qs from "qs";
import { $authHost, $host } from "./index";

export const Auth = async (username, password) => {
  try {
    const { data } = await $host.post(
      "/vencon/admin/reg/oauth",
      qs.stringify({
        username: username,
        password: password,
      })
    );
    localStorage.setItem("token", data.access_token);
    localStorage.setItem("isAuth", true);
    return data;
  } catch (error) {
    // Обработка ошибок
    alert("Неверные данные!");
    throw error;
  }
};

export const getWhyusPageData = async (id, lang) => {
  const { data } = await $host.get(
    `/vencon/user/page?page_id=${id}&language=${lang}`
  );
  return data;
};
