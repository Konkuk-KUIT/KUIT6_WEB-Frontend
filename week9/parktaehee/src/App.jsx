import { useState, useEffect } from "react";
import { usePosts } from "./hooks/usePosts";

const App = () => {
  const [title, setTitle] = useState("");
  const { posts, addPost, loading } = usePosts();

  const hanldeSubmit = () => {
    addPost(title);
    setTitle("");
  };

  return (
    <div>
      <h2>게시글 목록</h2>
      {loading ? (
        <p>로딩중...</p>
      ) : (
        <ul>
          {posts.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      )}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={hanldeSubmit}>추가</button>
    </div>
  );
};

export default App;
