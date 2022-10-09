/** @format */

import React from "react";
import { SideBar } from "../sideBar";
import { Nav } from "../nav";
import { useStyles } from "./style";
import { SummaryCard } from "../summaryCard";
import { SoftDashboard } from "../softDashboard";
import { WorkWithRockets } from "../workWithRockets";
import { ActiveUsers } from "../activeUsers";
import { SalesOverview } from "../salesOverview";
import { Project } from "../projects";
import { MyActitvity } from "../myActivity";

function WelcomePage() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <SideBar />
      <div className={classes.homeContainer}>
        <div className={classes.widgets}>
          <SummaryCard />
        </div>
        <div className={classes.widgets}>
          <SoftDashboard />
          <WorkWithRockets />
        </div>
        <div className={classes.widgets}>
          <ActiveUsers />
          <SalesOverview />
        </div>
        <div className={classes.widgets}>
          <Project />
          <MyActitvity />
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
