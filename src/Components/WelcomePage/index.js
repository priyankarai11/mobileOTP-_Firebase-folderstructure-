/** @format */

import React from "react";
import { Box } from "@material-ui/core";
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
        <Box className={classes.boxConatiner} gap={2}>
          <Box gridColumn="span 7">
            <SoftDashboard />
          </Box>
          <Box gridColumn="span 5">
            <WorkWithRockets />
          </Box>
        </Box>
        <Box className={classes.activeAndSalesConatiner} gap={3}>
          <Box gridColumn="span 6">
            <ActiveUsers />
          </Box>
          <Box gridColumn="span 6">
            <SalesOverview />
          </Box>
        </Box>
        <Box className={classes.projectAndActivity} gap={3}>
          <Box gridColumn="span 7">
            <Project />
          </Box>
          <Box gridColumn="span 5">
            <MyActitvity />
          </Box>
        </Box>
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
