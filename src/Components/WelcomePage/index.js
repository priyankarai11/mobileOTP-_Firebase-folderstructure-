/** @format */

import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { SideBar } from "../navigation/sideBar";
import { SummaryCard } from "../widgets/summaryCard";
import { SoftDashboard } from "../widgets/softDashboard";
import { WorkWithRockets } from "../widgets/workWithRockets";
import { ActiveUsers } from "../widgets/activeUsers";
import { SalesOverview } from "../widgets/salesOverview";
import { Project } from "../widgets/projects";
import { MyActitvity } from "../widgets/myActivity";
import { useStyles } from "./style";

function WelcomePage() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <SideBar />
      <div className={classes.homeContainer}>
        <div className={classes.widgets}>
          <SummaryCard />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={7} md={7}>
            <SoftDashboard />
          </Grid>
          <Grid item>
            <WorkWithRockets />
          </Grid>
          <Grid item xs={6}>
            <ActiveUsers />
          </Grid>
          <Grid item xs={6}>
            <SalesOverview />
          </Grid>
          <Grid item xs={7}>
            <Project />
          </Grid>
          <Grid item xs={5}>
            <MyActitvity />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default WelcomePage;

{
  /* <div className={classes.widgets}>
          <SummaryCard />
        </div>
        <div className={classes.softandWorkWithRockets}>
          <SoftDashboard />
          <WorkWithRockets />
        </div> */
}
{
  /* <div className={classes.widgets}>
          <ActiveUsers />
          <SalesOverview />
        </div>
        <div className={classes.widgets}>
          <Project />
          <MyActitvity />
        </div> */
}
