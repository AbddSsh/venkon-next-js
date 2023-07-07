import qs from "qs";
import { $authHost, $host } from "./index";
import axios from "axios";

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

export const putPageSeo = async (pageId, lng, title, description, keywords) => {
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

export const putContentText = async (id, text) => {
  try {
    const { data } = await $authHost.put("/vencon/admin/edit/text", {
      text_id: id,
      text: text,
    });
    alert(
      `Данные успешно обновлены.Обновите страницу чтобы увидеть изменения.`
    );
    return data;
  } catch (error) {
    alert(`Ошибка... ${error}`);
  }
};

export const putContentFile = async (id, formData) => {
  try {
    const { data } = await $authHost.put(
      `/vencon/admin/edit/file?file_id=${id}`,
      formData
    );
    alert(
      `Данные успешно обновлены.Обновите страницу чтобы увидеть изменения.`
    );
    return data;
  } catch (error) {
    alert(`Ошибка... ${error}`);
  }
};

export const putContentAlt = async (fileId, text, lng) => {
  try {
    const { data } = await $authHost.put("/vencon/admin/edit/alt", {
      file_id: fileId,
      alt: [
        {
          text: text,
          language: lng,
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
