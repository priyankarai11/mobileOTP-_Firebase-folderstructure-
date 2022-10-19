/** @format */

/** @format */

import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { useStyles } from "./style";

function WorkWithRockets() {
  const classes = useStyles();
  return (
    <div className={classes.workWithRockets}>
      <span className={classes.title}>Work with the rockets </span>
      <span className={classes.desc}>
        Wealth creation is an evolutionarily recent positive-sum game. It is all
        about who take the opportunity first.
      </span>
      <span className={classes.readMore}>Read More</span>
      <ArrowForwardIcon className={classes.arrow} />
    </div>
  );
}

export { WorkWithRockets };
