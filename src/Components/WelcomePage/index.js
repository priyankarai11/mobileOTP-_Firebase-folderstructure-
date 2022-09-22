/** @format */

import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./style";

function WelcomePage({ logOut }) {
  const classes = useStyles();
  const userRole = localStorage.getItem("Role");

  return (
    <div className={classes.centered}>
      <div className={classes.dashboardText}>
        Dashboard of <strong className={classes.userRole}> {userRole} </strong>
      </div>
      <Button className={classes.logOut} onClick={logOut}>
        Logout
      </Button>
    </div>
  );
}

export default WelcomePage;
