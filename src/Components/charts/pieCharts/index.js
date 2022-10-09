/** @format */

import React from "react";
import { PieChartLib } from "./PieChartLib";

const pieSize = 230;
const pieInnerSize =100;

const initialMonthlySpending = [
  { name: "Bonds", y: 30 },
  { name: "Forex", y: 25 },
  { name: "Crypto", y: 20 },
  { name: "Stocks", y: 15 },
  { name: "Indices", y: 10 },
];

function PieChart() {
  return (
    <PieChartLib
      pieSize={pieSize}
      pieInnerSize={pieInnerSize}
      data={initialMonthlySpending}
    />
  );
}

export { PieChart };
