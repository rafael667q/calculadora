import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, LineElement, PointElement, LinearScale, CategoryScale } from "chart.js";

Chart.register(LineElement, PointElement, LinearScale, CategoryScale);

const ResultChart = ({ x, y, result, method }) => {
  const data = {
    labels: x,
    datasets: [
      {
        label: "Concentración",
        data: y,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h3>Resultado: {result} (método: {method})</h3>
      <Line data={data} />
    </div>
  );
};

export default ResultChart;import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, LineElement, PointElement, LinearScale, CategoryScale } from "chart.js";

Chart.register(LineElement, PointElement, LinearScale, CategoryScale);

const ResultChart = ({ x, y, result, method }) => {
  const data = {
    labels: x,
    datasets: [
      {
        label: "Concentración",
        data: y,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h3>Resultado: {result} (método: {method})</h3>
      <Line data={data} />
    </div>
  );
};

export default ResultChart;