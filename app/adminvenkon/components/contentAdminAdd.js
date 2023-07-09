"use client";

import { addBlock } from "@/services/admin";
import { useEffect, useState } from "react";

export default function ContentAdminAdd({ block, sectionId }) {
  const [isAdd, setIsAdd] = useState(false);
  const lng = ["ru", "uz", "en"];
  const [addedTextStates, setAddedTextStates] = useState([]);
  const [addedFile, setAddedFile] = useState([]);
  const [addedAltStates, setAddedAltStates] = useState([]);

  const handleChangeFile = (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    setAddedFile({ formData: formData });
  };
  const handleChangeAlt = (index, event) => {
    const { value } = event.target;
    const updatedAltStates = lng.map((lang, i) => ({
      text: i === index ? value : "",
      language: lang,
    }));
    setAddedAltStates(updatedAltStates);
  };
  const handleChangeText = (lang, event) => {
    // const { value } = event.target;
    // const updatedTextState = lng.map((language) => ({
    //   text: language === lang ? value : "",
    //   language: language,
    // }));
    // setAddedTextStates(updatedTextState);
    // console.log(addedTextStates);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (fileStates) {
    //   putContentFile(fileStates.fileId, fileStates.formData);
    // }
    // putContentAlt(altStates[0].fileId, altStates[0].text, lng);
    // textStates.map((text) => {
    //   putContentText(text.id, text.text);
    // });

    console.log(addedTextStates);
    console.log(addedFile);
    console.log(addedAltStates);
  };

  useEffect(() => {
    const textsBlock = block?.texts.map((obj, index) => {
      const texts = lng.map((lang) => {
        return { text: "", language: lang };
      });
      return texts;
    });
    setAddedTextStates(textsBlock);
  }, []);

  return (
    <div>
      {isAdd ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "3%",
              border: "0.5px solid #999999",
              borderRadius: "10px",
              margin: "10px",
            }}
          >
            {block?.files.map((file, index) => (
              <div key={file.id}>
                <label
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontWeight: "500", marginBottom: "10px" }}>
                    Add file:
                  </span>
                  <input
                    type="file"
                    style={{
                      padding: "10px",
                      borderRadius: "15px",
                      border: "0.5px solid #606060",
                    }}
                    onChange={(event) => handleChangeFile(event)}
                  />
                </label>
                {lng.map((lang) => (
                  <label
                    key={lang}
                    style={{
                      marginBottom: "10px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontWeight: "500", marginBottom: "5px" }}>
                      Add alt for image {lang}:
                    </span>
                    <input
                      type="text"
                      style={{
                        padding: "10px",
                        borderRadius: "15px",
                        border: "0.5px solid #606060",
                      }}
                      onChange={(event) => handleChangeAlt(index, event)}
                    />
                  </label>
                ))}
              </div>
            ))}
            {block?.texts.map((text, index) => (
              <div key={text.id}>
                {lng.map((lang) => (
                  <label
                    key={lang}
                    style={{
                      marginBottom: "10px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontWeight: "500", marginBottom: "5px" }}>
                      Add text #{index + 1} {lang}:
                    </span>
                    <input
                      type="text"
                      style={{
                        padding: "10px",
                        borderRadius: "15px",
                        border: "0.5px solid #606060",
                      }}
                      onChange={(event) => handleChangeText(lang, event)}
                    />
                  </label>
                ))}
              </div>
            ))}
            <input
              type="submit"
              value="Добавить блок"
              disabled={
                addedTextStates.length === 0 ||
                addedFile.length === 0 ||
                (addedAltStates.length === 0 && true)
              }
            />
          </form>
          <button onClick={() => setIsAdd(false)}>Назад</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setIsAdd(true)}>Добавить блок</button>
        </div>
      )}
    </div>
  );
}
