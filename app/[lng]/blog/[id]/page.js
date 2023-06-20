async function getData(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

export async function generateMetadata({ params: { id } }) {
  const post = await getData(id);
  return {
    title: post.title,
    description: post.body,
  };
}

export default async function Post({ params: { id } }) {
  const post = await getData(id);
  return (
    <>
      <h1>Post page {id}</h1>
      <div>
        <h2>
          {post.id}. {post.title}
        </h2>
        <h4>{post.body}</h4>
      </div>
    </>
  );
}
