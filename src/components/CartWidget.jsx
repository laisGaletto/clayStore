import React from "react";
import { Link } from "react-router-dom";
import carrinhoIcon from '../imgs/carrinho.png';

const CartWidget = () => {
  return (
     
      <img src={carrinhoIcon} alt="Carrinho" className="cart-icon" />
    
  );
}

export default CartWidget;