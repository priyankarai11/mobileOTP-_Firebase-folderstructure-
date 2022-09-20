/** @format */

import React from "react";
import { useStyles } from "./style";

export default function NotFoundPage() {
    const classes = useStyles();
  return <h1 className={classes.notFound}>Page Not Found</h1>;
}
