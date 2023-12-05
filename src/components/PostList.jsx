export default function PostList({ posts }) {
  return (
    <div className="border rounded h-1/2 w-1/2 m-auto mt-40 p-3">
      <ul className="flex flex-col justify-start">
        {posts.map((post) => (
          <li key={post.id}>- {post.title}</li>
        ))}
      </ul>
    </div>
  );
}
