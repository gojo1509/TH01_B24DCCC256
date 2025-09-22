import React, { useState } from "react";
import Job from "./Job";
import ColorBox from "./ColorBox";
import CartItem from "./CartItem";
import Post from "./Post";

function App() {
  // bài 1
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);

  const addJob = () => {
    if (job.trim() !== "") {
      setJobs([...jobs, job]);
      setJob("");
    }
  };

  const deleteJob = (index) => {
    const newJobs = jobs.filter((_, i) => i !== index);
    setJobs(newJobs);
  };

  // bài 2
  const [color, setColor] = useState("");

  // bài 3
  const products = [
    { name: "Sách", price: 10000 },
    { name: "Bút", price: 5000 },
    { name: "Vở", price: 7000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* bài 1 */}
      <h3>Bài 1: To-do-list</h3>
      <input
        type="text"
        value={job}
        placeholder="Nhập công việc"
        onChange={(e) => setJob(e.target.value)}
      />
      <button onClick={addJob}>Thêm</button>
      <ul>
        {jobs.map((j, index) => (
          <Job key={index} name={j} onDelete={() => deleteJob(index)} />
        ))}
      </ul>

      <hr />
      {/* Bài 2 */}
      <h3>Bài 2: Color Picker</h3>
      <div>
        <button onClick={() => setColor("red")}>red</button>
        <button onClick={() => setColor("green")}>green</button>
        <button onClick={() => setColor("yellow")}>yellow</button>
      </div>
      <ColorBox color={color} />

      {/* Bài 3 */}
      <h3>Bài 3: Giỏ hàng</h3>

      <h4>Sản phẩm</h4>
      {products.map((p, index) => (
        <div key={index}>
          {p.name} - {p.price}₫{" "}
          <button onClick={() => addToCart(p)}>Thêm vào giỏ</button>
        </div>
      ))}

      <hr />

      <h4>Giỏ hàng</h4>
      <ul>
        {cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </ul>

      <p>
        <strong>Tổng tiền:</strong> {total}₫
      </p>

      {/* Bài 4 */}
      <h3>Bài 4: Like/Dislike Post</h3>

      <Post content="Học ReactJS có khó không?" />
      <Post content="Props và State là gì?" />
      <Post content="Lập trình web có vui không?" />
    </div>
  );
}

export default App;
