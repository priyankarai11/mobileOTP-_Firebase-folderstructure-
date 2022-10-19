/** @format */

import React from "react";
import RocketImage from "../../../assets/images/rocket.svg";
import { useStyles } from "./style";

function SoftDashboard() {
  const classes = useStyles();
  return (
    <div className={classes.softDashboard}>
      <div className={classes.left}>
        <span className={classes.title}>Built by Yasamin shahgoli gashti</span>
        <p className={classes.mainTitle}>Soft Dashboard</p>
        <span className={classes.info}>
          From colors, cards, typography to complex elements, you will find the
          full documentation.
        </span>
      </div>

      <div className={classes.right}>
        <img className={classes.img} src={RocketImage} alt="dollar" />
      </div>
    </div>
  );
}

export { SoftDashboard };
