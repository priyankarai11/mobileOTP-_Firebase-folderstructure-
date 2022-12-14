/** @format */

import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { LineChart } from "../../charts/lineChart";
import { useStyles } from "./style";

function SalesOverview() {
  const classes = useStyles();
  return (
    <div className={classes.salesOverview}>
      <div className={classes.salesContainer}>
        <span className={classes.overview}>Sales Overview</span>

        <span className={classes.percentage}>
          <ArrowUpwardIcon className={classes.arrow} />
          <span className={classes.more}>4% more</span>
          <span className={classes.year}>in 2021</span>
        </span>
      </div>
      <div className={classes.lineChart}>
        <LineChart />
      </div>
    </div>
  );
}

export { SalesOverview };
