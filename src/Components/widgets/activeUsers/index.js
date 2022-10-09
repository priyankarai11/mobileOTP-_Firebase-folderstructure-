/** @format */

import React from "react";
import { BarChart } from "../../charts/barChart";
import { useStyles } from "./style";

function ActiveUsers() {
  const classes = useStyles();
  return (
    <div className={classes.activeUsers}>
      <BarChart />
      <div className={classes.userActivity}>
        <span className={classes.active}>Active Users</span>
        <span className={classes.percentage}>
          (+23%) <span className={classes.lastWeek}>than last week</span>
        </span>
      </div>
    </div>
  );
}

export { ActiveUsers };
