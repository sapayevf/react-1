import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
