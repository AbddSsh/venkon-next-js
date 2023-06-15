import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link className="my-link" href={`/blog/${post.id}`}>
              {post.id}. {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Posts };
