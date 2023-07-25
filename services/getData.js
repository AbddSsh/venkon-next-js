import { $host } from "./index";

// export const getWhyWeData = async (id, lang) => {
//   const { data } = await $host.get(
//     `/vencon/user/page?page_id=${id}&language=${lang}`,
//   );
//   return data;
// };

export const getData = async (id, lang) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/vencon/user/page?page_id=${id}&language=${lang}`,
    { next: { revalidate: 0 } }
  );
  const data = await response.json();
  return data;
};

export const sendMail = async (
  firstName,
  lastName,
  email,
  phoneNumber,
  message
) => {
  const { data } = await $host.post(`/vencon/user/send/mail`, {
    first_name: firstName,
    surname: lastName,
    mail: email,
    phone: phoneNumber,
    text: message,
  });
  console.log(data);
  return data;
};
