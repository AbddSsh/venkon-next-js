"use client";

import {
  putContentAlt,
  putContentFile,
  putContentText,
} from "@/services/admin";
import { useEffect, useState } from "react";
import ContentAdminRemove from "./contentAdminRemove";

export default function ContentAdminEdit({ block, pageId, lng }) {
  const [isChange, setIsChange] = useState(false);
  const [fileStates, setFileStates] = useState(null);
  const [altStates, setAltStates] = useState([]);
  const [textStates, setTextStates] = useState([]);

  const updateTextStateById = (id, newText) => {
    setTextStates((prevTextStates) =>
      prevTextStates.map((textState) =>
        textState.id === id ? { ...textState, text: newText } : textState
      )
    );
  };
  const updateAltStateById = (id, newAlt) => {
    setAltStates((prevAltStates) =>
      prevAltStates.map((altState) =>
        altState.id === id ? { ...altState, text: newAlt } : altState
      )
    );
  };

  const handleChangeFile = (event, id) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    setFileStates({ fileId: id, formData: formData });
  };
  const handleChangeText = (index, event) => {
    const newText = event.target.value;
    const id = block.texts[index].id;
    updateTextStateById(id, newText);
  };
  const handleChangeAlt = (index, event) => {
    const newAlt = event.target.value;
    const id = block.files[index].alts.id;
    updateAltStateById(id, newAlt);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fileStates) {
      putContentFile(fileStates.fileId, fileStates.formData);
    }
    putContentAlt(altStates[0].fileId, altStates[0].text, lng);
    textStates.map((text) => {
      putContentText(text.id, text.text);
    });
  };
  useEffect(() => {
    if (block) {
      const initialTextStates = block.texts.map((text) => ({
        id: text.id,
        text: text.text,
      }));
      setTextStates(initialTextStates);
      const initialAltStates = block.files.map((file) => ({
        fileId: file.id,
        altId: file.alts[0].id,
        text: file.alts[0].text,
      }));
      setAltStates(initialAltStates);
    }
  }, [block]);
  return (
    <div>
      {isChange ? (
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
                    Edit file:
                  </span>
                  <input
                    type="file"
                    onChange={(event) => handleChangeFile(event, file.id)}
                    style={{
                      padding: "10px",
                      borderRadius: "15px",
                      border: "0.5px solid #606060",
                    }}
                  />
                </label>
                <label
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontWeight: "500", marginBottom: "5px" }}>
                    Edit alt for image:
                  </span>
                  <input
                    type="text"
                    value={altStates[index].text || ""}
                    onChange={(event) => handleChangeAlt(index, event)}
                    style={{
                      padding: "10px",
                      borderRadius: "15px",
                      border: "0.5px solid #606060",
                    }}
                  />
                </label>
              </div>
            ))}
            {block?.texts.map((text, index) => (
              <label
                key={text.id}
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span style={{ fontWeight: "500", marginBottom: "5px" }}>
                  Edit text:
                </span>
                <input
                  type="text"
                  value={textStates[index].text || ""}
                  onChange={(event) => handleChangeText(index, event)}
                  style={{
                    padding: "10px",
                    borderRadius: "15px",
                    border: "0.5px solid #606060",
                  }}
                />
              </label>
            ))}
            <input type="submit" value="Сохранить изменения" />
          </form>
          <button onClick={() => setIsChange(false)}>Назад</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setIsChange(true)}>Изменить</button>
          <ContentAdminRemove blockId={block.id} />
        </div>
      )}
    </div>
  );
}
