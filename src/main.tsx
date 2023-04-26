import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Calculator from "./View/Calculator.tsx";
import { CalculatorProvider } from "./Context/Calculator.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  </React.StrictMode>
);
