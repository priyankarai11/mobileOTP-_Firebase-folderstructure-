/** @format */

import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import InfoCard from "../../../assets/images/infoCard.svg";
import { useStyles } from "./style";

function WorkWithRockets() {
  const classes = useStyles();
  return (
    <div className={classes.workWithRockets}>
      <img className={classes.infoCard} src={InfoCard} alt="infoCard" />
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
