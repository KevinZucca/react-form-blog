import { useEffect, useState } from "react";
import PostList from "./components/PostList";
import "tailwindcss/tailwind.css";
import "./App.css";

function App() {
  const initialFormData = {
    title: "",
  };

  const [postsList, setPostsList] = useState([]);
  const [post, setPost] = useState(initialFormData);

  function updatePostsList(newValue, fieldName) {
    const newPost = { ...post };
    newPost[fieldName] = newValue;
    setPost(newPost);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    setPostsList([
      ...postsList,
      {
        ...post,
        id: crypto.randomUUID(),
        createdAt: new Date(),
      },
    ]);
    setPost(initialFormData);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} className="text-center">
        <label htmlFor="post"></label>
        <input
          className="border p-3"
          value={post.title}
          type="text"
          placeholder="Insert the post name"
          onChange={(e) => updatePostsList(e.target.value, "title")}
        />
        <button
          type="submit"
          className="border p-3 bg-sky-500 text-white rounded-xl hover:bg-sky-800"
        >
          Create
        </button>
      </form>

      <PostList
        singlePost={post}
        posts={postsList}
        setPostsList={setPostsList}
        postsList={postsList}
        setPost={setPost}
        useEffect={useEffect}
      />
    </>
  );
}

export default App;
