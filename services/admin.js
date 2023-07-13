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
      `Данные успешно обновлены. Обновите страницу чтобы увидеть изменения.`
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
      `Данные успешно обновлены. Обновите страницу чтобы увидеть изменения.`
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
      `Данные успешно обновлены. Обновите страницу чтобы увидеть изменения.`
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
      `Данные успешно обновлены. Обновите страницу чтобы увидеть изменения.`
    );
    return data;
  } catch (error) {
    alert(`Ошибка... ${error}`);
  }
};

export const addBlock = async (sectionId, textRu, textUz, textEn) => {
  try {
    const { data } = await $authHost.post("/vencon/admin/create/block", {
      section_id: sectionId,
      name: "admin's block",
      text: [
        {
          text: textRu,
          language: "ru",
        },
        {
          text: textUz,
          language: "uz",
        },
        {
          text: textEn,
          language: "en",
        },
      ],
    });
    alert(
      `Данные успешно обновлены. Обновите страницу чтобы увидеть изменения.`
    );
    return data;
  } catch (error) {
    alert(`Ошибка... ${error}`);
  }
};

export const addFile = async (blockId, formData) => {
  try {
    const { data } = await $authHost.post(
      `/vencon/admin/add/file?block_id=${blockId}`,
      formData
    );
    alert(
      `Данные успешно обновлены. Обновите страницу чтобы увидеть изменения.`
    );
    return data;
  } catch (error) {
    alert(`Ошибка... ${error}`);
  }
};

export const addAlt = async (fileId, textRu, textUz, textEn) => {
  try {
    const { data } = await $authHost.post("/vencon/admin/add/alt", {
      file_id: fileId,
      alt: [
        {
          text: textRu,
          language: "ru",
        },
        {
          text: textUz,
          language: "uz",
        },
        {
          text: textEn,
          language: "en",
        },
      ],
    });
    alert(
      `Данные успешно обновлены. Обновите страницу чтобы увидеть изменения.`
    );
    return data;
  } catch (error) {
    alert(`Ошибка... ${error}`);
  }
};

export const addText = async (blockId, textRu, textUz, textEn) => {
  try {
    const { data } = await $authHost.post("/vencon/admin/add/text", {
      block_id: blockId,
      text: [
        {
          text: textRu,
          language: "ru",
        },
        {
          text: textUz,
          language: "uz",
        },
        {
          text: textEn,
          language: "en",
        },
      ],
    });
    alert(
      `Данные успешно обновлены. Обновите страницу чтобы увидеть изменения.`
    );
    return data;
  } catch (error) {
    alert(`Ошибка... ${error}`);
  }
};

export const deleteBlock = async (blockId) => {
  try {
    const { data } = await $authHost.delete(
      `/vencon/admin/remove/block?block_id=${blockId}`
    );
    alert("Элемент успешно удален. Обновите страницу.");
    return data;
  } catch (error) {
    alert(`Ошибка... ${error}. НЕВОЗМОЖНО УДАЛИТЬ ПОСЛЕДНИЙ ОСТАВШИЙСЯ БЛОК.`);
  }
};
