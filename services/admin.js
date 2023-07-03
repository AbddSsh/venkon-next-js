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

export const putWhyusPageSeo = async (
  pageId,
  lng,
  title,
  description,
  keywords
) => {
  try {
    const { data } = await $authHost.put(`/vencon/admin/edit/seo`, {
      page_id: pageId,
      seo: [
        {
          language: lng,
          title: title,
          description: description,
          keywords: keywords,
        },
      ],
    });
    alert(
      `Данные успешно обновлены.Обновите страницу чтобы увидеть изменения.`
    );
    return data;
  } catch (error) {
    alert(`Ошибка... ${error}`);
  }
};
