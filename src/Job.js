import React from "react";

function Job({ name, onDelete }) {
  return (
    <li>
      {name} <button onClick={onDelete}>Xóa</button>
    </li>
  );
}

export default Job;
