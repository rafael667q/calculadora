import React, { useState } from "react";
import CalculatorForm from "./components/CalculatorForm";
import ResultChart from "./components/ResultChart";
import { calcularCarga } from "./api";

function App() {
  const [result, setResult] = useState(null);

  const handleCalculate = async (method, x, y) => {
    try {
      const data = await calcularCarga(method, x, y);
      setResult(data);
    } catch (err) {
      alert("Error en el cálculo: " + err.message);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h1>Cálculo de carga de contaminantes en un río</h1>
      <CalculatorForm onCalculate={handleCalculate} />
      {result && (
        <ResultChart
          x={result.x_values}
          y={result.y_values}
          result={result.result}
          method={result.method}
        />
      )}
    </div>
  );
}

export default App;