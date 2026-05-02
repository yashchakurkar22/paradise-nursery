import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  // track added items (for disabling button)
  const [addedItems, setAddedItems] = useState({});

  // ✅ 3 categories with multiple plants
  const plants = {
    Indoor: [
      { id: 1, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/100" },
      { id: 2, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/100" }
    ],
    Outdoor: [
      { id: 3, name: "Rose", price: 25, image: "https://via.placeholder.com/100" },
      { id: 4, name: "Tulip", price: 22, image: "https://via.placeholder.com/100" }
    ],
    Medicinal: [
      { id: 5, name: "Tulsi", price: 12, image: "https://via.placeholder.com/100" },
      { id: 6, name: "Neem", price: 18, image: "https://via.placeholder.com/100" }
    ]
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 }));

    // disable button after adding
    setAddedItems({ ...addedItems, [plant.id]: true });
  };

  return (
    <div>

      {/* ✅ NAVBAR WITH LINKS */}
      <nav style={{ display: "flex", gap: "20px" }}>
        <a href="#">Home</a>
        <a href="#">Plants</a>
        <a href="#">Cart</a>
      </nav>

      <h1>Product List</h1>

      {/* ✅ CATEGORY WISE DISPLAY */}
      {Object.keys(plants).map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          {plants[category].map((plant) => (
            <div key={plant.id}>
              <img src={plant.image} alt={plant.name} />

              <h3>{plant.name}</h3>
              <p>${plant.price}</p>

              <button
                onClick={() => handleAddToCart(plant)}
                disabled={addedItems[plant.id]}
              >
                {addedItems[plant.id] ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
