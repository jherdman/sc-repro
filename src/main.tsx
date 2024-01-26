import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NDSProvider } from "@nulogy/components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NDSProvider>
      <App />
    </NDSProvider>
  </React.StrictMode>
);
