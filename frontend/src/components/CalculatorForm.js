import React, { useState } from "react";

const CalculatorForm = ({ onCalculate }) => {
  const [method, setMethod] = useState("trapecio");
  const [xValues, setXValues] = useState("");
  const [yValues, setYValues] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const xArr = xValues.split(",").map(Number);
    const yArr = yValues.split(",").map(Number);
    onCalculate(method, xArr, yArr);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Método:</label>
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="trapecio">Trapecio</option>
          <option value="simpson">Simpson</option>
        </select>
      </div>
      <div>
        <label>X (separados por coma):</label>
        <input
          type="text"
          value={xValues}
          onChange={(e) => setXValues(e.target.value)}
          placeholder="0,1,2,3"
          required
        />
      </div>
      <div>
        <label>Y (separados por coma):</label>
        <input
          type="text"
          value={yValues}
          onChange={(e) => setYValues(e.target.value)}
          placeholder="10,20,30,40"
          required
        />
      </div>
      <button type="submit">Calcular</button>
    </form>
  );
};

export default CalculatorForm;