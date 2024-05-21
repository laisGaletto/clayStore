import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { createRoot } from "react-dom/client";
import './styles/reset.css';
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer title="Produtos" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));