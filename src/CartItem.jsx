import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  // get all items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  const increment = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const decrement = () => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleDelete = () => {
    dispatch(removeItem(item.id));
  };

  // ✅ total for one item
  const total = item.quantity * item.price;

  // ✅ total for whole cart
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0
    );
  };

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>

      <button onClick={decrement}>-</button>
      <span>{item.quantity}</span>
      <button onClick={increment}>+</button>

      <p>Total: ${total}</p>

      <button onClick={handleDelete}>Delete</button>

      {/* ✅ TOTAL CART AMOUNT */}
      <h2>Total Cart: ${calculateTotalAmount()}</h2>
    </div>
  );
}

export default CartItem;
