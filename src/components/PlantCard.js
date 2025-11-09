import React from "react";

function PlantCard({ plant, onToggleSoldOut }) {
  const { id, name, image, price, soldOut } = plant;

  function handleClick() {
    onToggleSoldOut(id);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {soldOut ? (
        <button onClick={handleClick}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleClick}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
