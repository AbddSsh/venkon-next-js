"use client";
import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { getAllPosts } from "@/services/getPosts";
import { useEffect, useState } from "react";

// async function getData() {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
//     next: {
//       revalidate: 60,
//     },
//   });
//   if (!response.ok) throw new Error("Enable to fetch!");
//   return response.json();
// }

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <h1>Blog page</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </>
  );
}
