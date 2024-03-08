import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 2) Get a reference to the dive with id
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) show the component on the screen
root.render(<App />);
