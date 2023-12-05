import { useState } from "react";

export default function PostList({
  singlePost,
  posts,
  setPost,
  setPostsList,
  postsList,
  useEffect,
}) {
  const [editedPost, setEditedPost] = useState({});

  function handleEditPost(post) {
    if (post.id == editedPost.id) {
      setEditedPost({});
    } else {
      setEditedPost(post);
    }
  }

  function updatePost(newValue, fieldName) {
    setEditedPost({
      ...editedPost,
      [fieldName]: newValue,
    });
  }

  function removePost(idToRemove) {
    setPostsList(posts.filter((post) => post.id !== idToRemove));
  }

  function handleEdit(e) {
    e.preventDefault();

    setPostsList((currentPosts) =>
      currentPosts.map((el) => (el.id == editedPost.id ? editedPost : el))
    );

    setEditedPost({});
  }

  return (
    <div className="border rounded h-1/2 w-1/2 m-auto mt-40 p-3">
      <ul className="flex flex-col justify-start">
        {posts.map((post) => (
          <li className="flex justify-between items-center" key={post.id}>
            - {post.title}
            <span>
              {editedPost?.id == post.id && (
                <form onSubmit={handleEdit} className="text-center">
                  <input
                    className={`border p-3`}
                    value={editedPost.title}
                    type="text"
                    placeholder="Edit the post"
                    onChange={(e) => updatePost(e.target.value, "title")}
                  />
                  <button
                    type="submit"
                    className="border p-3 bg-sky-500 text-white rounded-xl hover:bg-sky-800"
                  >
                    Save
                  </button>
                </form>
              )}
            </span>
            <span className="flex gap-3">
              <button
                className="w-5 h-5 flex justify-center items-center"
                onClick={() => handleEditPost(post)}
              >
                <img src="/imgs/pencil-svgrepo-com.svg" alt="" />
              </button>
              <button
                className="bg-red-400 w-5 h-5 flex justify-center items-center"
                onClick={() => removePost(post.id)}
              >
                x
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
