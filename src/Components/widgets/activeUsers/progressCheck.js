/** @format */

import React from "react";
import { PROGRESS } from "./constant";
import { ProgressBarLineComp } from "./progressBarLine";
import { useStyles } from "./style";

function ProgressCheck() {
  const classes = useStyles();
  return (
    <div className={classes.progressCheck}>
      {PROGRESS.map((ele) => {
        return (
          <div className={classes.mainContainer}>
            <div className={classes.progressContainer}>
              <img className={classes.logo} src={ele.logo} alt="logo" />
              <div>
                {" "}
                <span className={classes.title}>{ele.title}</span>
              </div>
            </div>
            <div className={classes.progressBarLine}>
              <ProgressBarLineComp value={ele.value} max={ele.max} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { ProgressCheck };
