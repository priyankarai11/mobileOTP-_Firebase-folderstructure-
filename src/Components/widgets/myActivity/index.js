/** @format */

import React from "react";
import { PieChart } from "../../charts/pieCharts";
import { useStyles } from "./style";

function MyActitvity() {
  const classes = useStyles();
  return (
    <div className={classes.myActitvity}>
      <div className={classes.salesContainer}>
        <PieChart />
      </div>
    </div>
  );
}

export { MyActitvity };
