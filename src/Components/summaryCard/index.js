/** @format */

import React from "react";
import { DETAILS } from "./cardDetails";
import { useStyles } from "./style";

function SummaryCard() {
  const classes = useStyles();
  return DETAILS.map((ele) => {
    return (
      <div className={classes.summaryCard}>
        <div className={classes.left}>
          <span className={classes.title}>{ele.title}</span>
          <span className={classes.dollar}>
            {ele.USD}
            <span className={classes.percentage}>{ele.dis}</span>
          </span>
        </div>
        <div className={classes.right}>
          <img src={ele.img} alt="dollar" />
        </div>
      </div>
    );
  });
}

export { SummaryCard };
