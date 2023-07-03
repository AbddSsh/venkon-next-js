"use client";

import { putWhyusPageSeo } from "@/services/admin";
import { useState } from "react";

export default function SeoAdmin({ seo, lng, pageId }) {
  const [isChange, setIsChange] = useState(false);
  const [title, setTitle] = useState(seo?.seo_title);
  const [description, setDescription] = useState(seo?.seo_description);
  const [keywords, setKeywords] = useState(seo?.seo_keywords);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleChangeKeywords = (event) => {
    setKeywords(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    putWhyusPageSeo(pageId, lng, title, description, keywords);
    setIsChange(false);
  };
  return (
    <div style={{ marginBottom: "20px" }}>
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
              marginBottom: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
                Title:{" "}
              </span>
              <input
                style={{
                  padding: "10px",
                  borderRadius: "15px",
                  border: "0.5px solid #606060",
                }}
                type="text"
                value={title}
                onChange={handleChangeTitle}
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
              <span style={{ fontWeight: "500", marginBottom: "10px" }}>
                Description:{" "}
              </span>
              <input
                style={{
                  padding: "10px",
                  borderRadius: "15px",
                  border: "0.5px solid #606060",
                }}
                type="text"
                value={description}
                onChange={handleChangeDescription}
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
              <span style={{ fontWeight: "500", marginBottom: "10px" }}>
                Keywords:{" "}
              </span>
              <input
                style={{
                  padding: "10px",
                  borderRadius: "15px",
                  border: "0.5px solid #606060",
                }}
                type="text"
                value={keywords}
                onChange={handleChangeKeywords}
              />
            </label>
            <input
              type="submit"
              value="Отправить"
              disabled={
                title?.length === 0 ||
                description?.length === 0 ||
                (keywords?.length === 0 && "true")
              }
            />
          </form>
          <button onClick={() => setIsChange(false)}>Назад</button>
        </div>
      ) : (
        <div style={{ marginBottom: "20px" }}>
          <div>
            <div style={{ marginBottom: "10px" }}>
              <span style={{ fontWeight: "700" }}>Title: </span>{" "}
              {seo?.seo_title}
            </div>
            <div style={{ marginBottom: "10px", fontWeight: "500" }}>
              <span style={{ fontWeight: "700" }}>Description: </span>
              {seo?.seo_description}
            </div>
            <div style={{ marginBottom: "10px", fontWeight: "400" }}>
              <span style={{ fontWeight: "700" }}>Keywords: </span>
              {seo?.seo_keywords}
            </div>
          </div>
          <button onClick={() => setIsChange(true)}>Изменить</button>
        </div>
      )}
    </div>
  );
}
