import React, { useState } from "react";

function Post({ content }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "8px",
      }}
    >
      <p>{content}</p>
      <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => setDislikes(dislikes + 1)}
      >
        👎 {dislikes}
      </button>
    </div>
  );
}

export default Post;
