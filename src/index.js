import React from "react";
import ReactDOM from "react-dom/client";  // Ensure this is the correct import based on your version
import App from "./App";  // Import your main App component
import "./index.css";  // Import your CSS styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
