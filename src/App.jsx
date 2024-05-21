import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { createRoot } from "react-dom/client";
import './styles/reset.css';
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));