/** @format */

import React from "react";
import { Grid } from "@material-ui/core";
import { ProgressCheck } from "./progressCheck";
import { BarChart } from "../../charts/barChart";
import { useStyles } from "./style";

function ActiveUsers() {
  const classes = useStyles();
  return (
    <div className={classes.activeUsers}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm container>
          <BarChart />
          <div>
            <div className={classes.userActivity}>
              <span className={classes.active}>Active Users</span>
              <span className={classes.percentage}>
                (+23%) <span className={classes.lastWeek}>than last week</span>
              </span>
            </div>
            <div className={classes.progressMain}>
              <ProgressCheck />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export { ActiveUsers };
