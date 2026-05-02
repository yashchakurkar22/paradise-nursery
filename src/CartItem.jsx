import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const decrement = () => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id)); // remove if 0
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleDelete = () => {
    dispatch(removeItem(item.id));
  };

  // dynamic total
  const total = item.quantity * item.price;

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>

      <button onClick={decrement}>-</button>
      <span>{item.quantity}</span>
      <button onClick={increment}>+</button>

      {/* DYNAMIC TOTAL */}
      <p>Total: ${total}</p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default CartItem;
