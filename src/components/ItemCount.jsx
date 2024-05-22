import React, { useState } from 'react';
import '../styles/ItemCount.css';

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (stock > 0) {
      onAdd(count);
    }
  };

  return (
    <div className="container">
      <button className="button" onClick={handleDecrease} disabled={count <= 1}>-</button>
      <span className="count-display">{count}</span>
      <button className="button" onClick={handleIncrease} disabled={count >= stock}>+</button>
      <button className="button" onClick={handleAdd} disabled={stock === 0}>Add to Cart</button>
    </div>
  );
}

export default ItemCount;