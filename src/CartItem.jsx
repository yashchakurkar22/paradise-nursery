import React, { useState } from "react";

function CartItem({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const total = quantity * item.price;

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>

      <button onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>

      <p>Total: ${total}</p>

      <button>Remove</button>
    </div>
  );
}

export default CartItem;
