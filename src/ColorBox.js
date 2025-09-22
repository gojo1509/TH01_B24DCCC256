import React from "react";

function ColorBox({ color }) {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: color,
        marginTop: "10px",
        border: "1px solid black",
      }}
    ></div>
  );
}

export default ColorBox;
