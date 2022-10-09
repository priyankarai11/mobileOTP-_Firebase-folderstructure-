/** @format */

import React from "react";
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
