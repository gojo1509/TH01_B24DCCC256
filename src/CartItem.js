import React from "react";
function CartItem({ item }) {
  return (
    <li>
      {item.name} - {item.price}đ
    </li>
  );
}

export default CartItem;
