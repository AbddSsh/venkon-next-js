import { useState } from "react";

export async function changeLang(lang) {
  const [selectedLang, setSelectedLang] = useState("RU");
  setSelectedLang(lang);
  console.log(lang);
  return selectedLang;
}
