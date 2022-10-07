/** @format */

import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const state = {
  labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
  datasets: [
    {
      label: "",
      backgroundColor: "#ffffff",
      borderWidth: 1,
      data: [800, 600, 400, 900, 700, 850, 500, 400, 650],
    },
  ],
};

const options = {
  //responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
      position: "right",
      labels: {
        color: "#ffffff",
      },
    },
    title: {
      display: true,
      text: "",
      fontSize: 20,
      color: "#ffffff",
    },
  },
  scales: {
    yAxes: {
      grid: {
        borderDash: [5, 5],
        color: "grey",
      },
      ticks: {
        color: "#ffffff",
      },
    },
    xAxes: {
      grid: {
        //borderDash: [3, 4],
        // color: "white",
      },
      ticks: {
        color: "#ffffff",
      },
    },
  },
};

function BarChart() {
  return (
    <Bar
      style={{
        background: "linear-gradient(135deg, #3A416F 0%, #141727 100%)",
        padding: 12,
      }}
      data={state}
      options={options}
    />
  );
}

export { BarChart };
