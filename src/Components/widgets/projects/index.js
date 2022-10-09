/** @format */

import React from "react";
import { TabCompo } from "./tabs";
import { useStyles } from "./style";

function Project() {
  const classes = useStyles();
  return (
    <div className={classes.project}>
      <div className={classes.projectContainer}>
        <span className={classes.title}>Projects</span>
        <span className={classes.desc}>
          your done <span className={classes.percentage}>40%</span>of your goal
          in this month
        </span>
      </div>

      <TabCompo />
    </div>
  );
}

export { Project };
