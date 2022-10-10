/** @format */

import React from "react";
import { ArrowForwardIosSharp, Settings } from "@material-ui/icons";
import { PieChart } from "../../charts/pieCharts";
import { useStyles } from "./style";

function MyActitvity() {
  const classes = useStyles();
  return (
    <div className={classes.myActitvity}>
      <div>
        <PieChart />
      </div>
      <ArrowForwardIosSharp className={classes.arrow} />
      <Settings className={classes.settings} />
    </div>
  );
}

export { MyActitvity };
