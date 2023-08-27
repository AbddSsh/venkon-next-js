"use client";

import { addAlt, addBlock, addFile, addText } from "@/services/admin";
import { invalidateCache } from "@/services/cache";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ContentAdminAdd({ block, sectionId }) {
  const [isAdd, setIsAdd] = useState(false);
  const lng = ["ru", "uz", "en"];
  const [addedTextStates, setAddedTextStates] = useState([]);
  const [addedFile, setAddedFile] = useState(null);
  const [addedAltStates, setAddedAltStates] = useState([]);
  const router = useRouter();

  const handleChangeFile = (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    setAddedFile({ formData: formData });
  };

  const handleChangeAlt = (lang, index, event) => {
    const updatedText = event.target.value;
    setAddedAltStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = {
        ...updatedStates[index],
        [lang]: {
          ...updatedStates[index][lang],
          text: updatedText,
        },
      };
      return updatedStates;
    });
  };

  const handleChangeText = (lang, index, event) => {
    const updatedText = event.target.value;
    setAddedTextStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = {
        ...updatedStates[index],
        [lang]: {
          ...updatedStates[index][lang],
          text: updatedText,
        },
      };
      return updatedStates;
    });
    console.log(addedTextStates);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (block?.files[0].id && addedFile) {
      addBlock(sectionId).then((data) => {
        addFile(data.block_id, addedFile.formData).then((data) =>
          addAlt(
            data.file_id,
            addedAltStates[0]?.ru?.text,
            addedAltStates[0]?.uz?.text,
            addedAltStates[0]?.en?.text
          )
        );
        if (block?.texts[0].id) {
          addedTextStates.map((texts) => {
            addText(
              data.block_id,
              texts?.ru?.text,
              texts?.uz?.text,
              texts?.en?.text
            );
          });
        }
      });
      invalidateCache();
      router.push("/adminvenkon");
    } else {
      addBlock(sectionId).then((data) => {
        addedTextStates.map((texts) => {
          addText(
            data.block_id,
            texts?.ru?.text,
            texts?.uz?.text,
            texts?.en?.text
          );
        });
      });
      invalidateCache();
      router.push("/adminvenkon");
    }
  };

  useEffect(() => {
    if (block.files[0].id) {
      const altBlock = block?.files[0].alts.reduce((acc, obj) => {
        const alts = lng.reduce((langAcc, lang) => {
          langAcc[lang] = { text: "" };
          return langAcc;
        }, {});
        acc.push(alts);
        return acc;
      }, []);
      setAddedAltStates(altBlock);
    }
    if (block.texts[0].id) {
      const textsBlock = block?.texts.reduce((acc, obj) => {
        const texts = lng.reduce((langAcc, lang) => {
          langAcc[lang] = { text: "" };
          return langAcc;
        }, {});
        acc.push(texts);
        return acc;
      }, []);
      setAddedTextStates(textsBlock);
    }
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
            {block?.files[0].id &&
              block?.files.map((file, index) => (
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
                        value={addedAltStates[index]?.[lang]?.text}
                        onChange={(event) =>
                          handleChangeAlt(lang, index, event)
                        }
                      />
                    </label>
                  ))}
                </div>
              ))}
            {block?.texts[0].id &&
              block?.texts.map((text, index) => (
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
                        value={addedTextStates[index][lang].text}
                        onChange={(event) =>
                          handleChangeText(lang, index, event)
                        }
                      />
                    </label>
                  ))}
                </div>
              ))}
            <input
              type="submit"
              value="Добавить блок"
              disabled={
                (block.files[0].id &&
                  (addedFile === null || addedFile?.length === 0)) ||
                (block.files[0].id &&
                  (addedAltStates?.[0]?.ru?.text.length === 0 ||
                    addedAltStates?.[0]?.uz?.text.length === 0 ||
                    addedAltStates?.[0]?.en?.text.length === 0 ||
                    addedAltStates?.[1]?.ru?.text.length === 0 ||
                    addedAltStates?.[1]?.uz?.text.length === 0 ||
                    (addedAltStates?.[1]?.en?.text.length === 0 && true))) ||
                (block.texts[0].id &&
                  (addedTextStates?.[0]?.ru?.text.length === 0 ||
                    addedTextStates?.[0]?.uz?.text.length === 0 ||
                    addedTextStates?.[0]?.en?.text.length === 0 ||
                    addedTextStates?.[1]?.ru?.text.length === 0 ||
                    addedTextStates?.[1]?.uz?.text.length === 0 ||
                    addedTextStates?.[1]?.en?.text.length === 0))
              }
            />
          </form>
          <button onClick={() => setIsAdd(false)}>Назад</button>
        </div>
      ) : (
        <div>
          <button style={{ color: "green" }} onClick={() => setIsAdd(true)}>
            Добавить блок
          </button>
        </div>
      )}
    </div>
  );
}
