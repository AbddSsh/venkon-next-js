"use client";

import { getPostBySearch } from "@/services/getPosts";
import { useState } from "react";

const PostSearch = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const posts = await getPostBySearch(search);
    onSearch(posts);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export { PostSearch };
