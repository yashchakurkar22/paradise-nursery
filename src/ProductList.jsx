import React, { useState } from "react";

const plants = {
  Indoor: [
    { id: 1, name: "Aloe Vera", price: 10 },
    { id: 2, name: "Snake Plant", price: 15 },
    { id: 3, name: "Peace Lily", price: 20 },
    { id: 4, name: "Spider Plant", price: 12 },
    { id: 5, name: "ZZ Plant", price: 18 },
    { id: 6, name: "Pothos", price: 14 }
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 25 },
    { id: 8, name: "Tulip", price: 22 },
    { id: 9, name: "Sunflower", price: 30 },
    { id: 10, name: "Jasmine", price: 28 },
    { id: 11, name: "Hibiscus", price: 26 },
    { id: 12, name: "Marigold", price: 20 }
  ]
};

function ProductList() {
  const [added, setAdded] = useState({});

  const handleAdd = (id) => {
    setAdded({ ...added, [id]: true });
  };

  return (
    <div>
      <h1>Plant Shop</h1>

      {Object.keys(plants).map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          {plants[category].map((plant) => (
            <div key={plant.id}>
              <h3>{plant.name}</h3>
              <p>${plant.price}</p>

              <button
                onClick={() => handleAdd(plant.id)}
                disabled={added[plant.id]}
              >
                {added[plant.id] ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
