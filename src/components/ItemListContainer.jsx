import React from 'react';
import ItemCount from './ItemCount';

function ItemListContainer({title}) {
  const handleAdd = (quantity) => {
    console.log(`Added ${quantity} items to the cart.`);
  };

  return (
    <div>
      <h1>{title}</h1>
      <ItemCount stock={5} initial={1} onAdd={handleAdd} />
    </div>
  );
}

export default ItemListContainer;