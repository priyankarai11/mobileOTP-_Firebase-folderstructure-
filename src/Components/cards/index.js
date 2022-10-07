/** @format */

import React from "react";
import { SummaryCard } from "../summaryCard";
import { useStyles } from "./style";

function Cards() {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <SummaryCard />
    </div>
  );
}

export { Cards };
