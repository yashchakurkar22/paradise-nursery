import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const plants = [
    {
      id: 1,
      name: "Aloe Vera",
      price: 10,
      category: "Indoor",
      image: "https://via.placeholder.com/100"
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 15,
      category: "Indoor",
      image: "https://via.placeholder.com/100"
    },
    {
      id: 3,
      name: "Peace Lily",
      price: 20,
      category: "Indoor",
      image: "https://via.placeholder.com/100"
    },
    {
      id: 4,
      name: "Rose",
      price: 25,
      category: "Outdoor",
      image: "https://via.placeholder.com/100"
    },
    {
      id: 5,
      name: "Tulip",
      price: 22,
      category: "Outdoor",
      image: "https://via.placeholder.com/100"
    },
    {
      id: 6,
      name: "Sunflower",
      price: 30,
      category: "Outdoor",
      image: "https://via.placeholder.com/100"
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 }));
  };

  return (
    <div>
      {/* Navbar */}
      <nav>
        <h2>Paradise Nursery</h2>
      </nav>

      <h1>Product List</h1>

      {plants.map((plant) => (
        <div key={plant.id}>
          {/* IMAGE (IMPORTANT) */}
          <img src={plant.image} alt={plant.name} />

          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <p>{plant.category}</p>

          {/* ADD TO CART BUTTON */}
          <button onClick={() => handleAddToCart(plant)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
