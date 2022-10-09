/** @format */

import React from "react";
import { Button } from "@material-ui/core";
import Shape from "../../../assets/images/shape.svg";
import DiamondMask from "../../../assets/images/diamondMask.svg";
import { useStyles } from "./style";

function DiamondShape() {
  const classes = useStyles();
  return (
    <div className={classes.diamondShape}>
      <img className={classes.diamond} src={DiamondMask} alt="diamondMask" />
      <img className={classes.shape} src={Shape} alt="shape" />
      <span className={classes.title}>Need help?</span>
      <span className={classes.desc}>Please check our docs</span>
      <Button className={classes.documentation}>documentation</Button>
    </div>
  );
}

export { DiamondShape };
