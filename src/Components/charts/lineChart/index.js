/** @format */

import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "First dataset",
      data: [50, 30, 300, 200, 500, 250, 400, 230, 500],
      borderColor: "#189C02",
    },
    {
      label: "Second dataset",
      data: [30, 110, 200, 25, 150, 100, 450, 80, 410],
      borderColor: "red",
    },
  ],
};

const options = {
  elements: {
    line: {
      tension: 0.4,
    },
  },
  //responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    yAxes: {
      grid: {
        borderDash: [1, 1],
        color: "#8C8C8C",
      },
    },
    xAxes: {
      grid: {
        borderDash: [1, 1],
        color: "#ffffff",
      },
    },
  },
};

function LineChart() {
  return (
    <div>
      <Line style={{ width: 600 }} data={data} options={options} />
    </div>
  );
}

export { LineChart };
