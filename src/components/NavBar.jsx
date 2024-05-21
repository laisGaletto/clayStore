import React, { useState } from "react";
import '../styles/NavBar.css';
import logo from '../imgs/logo.png';
import CartWidget from "./CartWidget";

const Links = ['Home', 'Sobre', 'Produtos'];

const NavBar = () => {
  const [active, setActive] = useState(0);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {Links.map((link, index) => (
          <li key={index} className={active === index ? 'active' : ''}>
            <a href="#" onClick={() => setActive(index)}>{link}</a>
          </li>
        ))}
      </ul>
      <img src={logo} alt="Feita D'Argila" className="logo" />
      <CartWidget />
    </nav>
  );
}

export default NavBar;