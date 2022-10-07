/** @format */

import React from "react";
import { Cards } from "../cards";
import { SideBar } from "../sideBar";
import { SummaryCard } from "../summaryCard";
import { useStyles } from "./style";

function Nav() {
  const classes = useStyles();
  return (
    <div className={classes.navBar}>
      <div className={classes.wrapper}></div>
    </div>
    // <div className={classes.container}>
    //   <Cards />
    //</div>
  );
}

export { Nav };
