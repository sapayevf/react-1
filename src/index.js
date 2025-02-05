import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import Header from "./components/Header/Header.js";
import Buttons from "./components/Buttons/Buttons.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header>
    </Header>
    <App />
  </React.StrictMode>
);
