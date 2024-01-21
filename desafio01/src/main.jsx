import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContentsProvider } from "./contexts/ContentsProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContentsProvider>
      <App />
    </ContentsProvider>
  </React.StrictMode>,
);
