/** @format */

import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./style";

function WelcomePage({ handleLogout }) {
  const classes = useStyles();
  const userRole = localStorage.getItem("role");

  return (
    <div className={classes.centered}>
      <div className={classes.dashboardText}>
        Dashboard of <strong className={classes.userRole}> {userRole} </strong>
      </div>
      <Button className={classes.logOut} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default WelcomePage;
