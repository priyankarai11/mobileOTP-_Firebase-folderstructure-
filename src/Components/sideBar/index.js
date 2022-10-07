/** @format */

import React from "react";
import {
  Home,
  InsertChart,
  AccountBalanceWallet,
  LocalGroceryStore,
  Person,
  Lock,
  Brightness4,
  SwapVert,
} from "@material-ui/icons";
import { useStyles } from "./style";
import { Card } from "@material-ui/core";

function SideBar() {
  const classes = useStyles();
  return (
      <div className={classes.sidebar}>
        <div className={classes.sidebarWrapper}>
          <div className={classes.sideBarMenu}>
            <h3 className={classes.sidebarTitleHeader}>USER Dashboard</h3>
            <hr className={classes.line} />
            <ul className={classes.sidebarList}>
              <li className={classes.sidebarListItem}>
                <Home className={classes.sidebarIcon} />
                Dashboard
              </li>
              <li className={classes.sidebarListItem}>
                <InsertChart className={classes.sidebarIcon} />
                Analyze
              </li>
              <li className={classes.sidebarListItem}>
                <AccountBalanceWallet className={classes.sidebarIcon} />
                Wallet
              </li>
              <li className={classes.sidebarListItem}>
                <LocalGroceryStore className={classes.sidebarIcon} />
                store
              </li>
            </ul>
            <h3 className={classes.sidebarTitle}>ACCOUNT SETTING</h3>
            <ul className={classes.sidebarList}>
              <li className={classes.sidebarListItem}>
                <Person className={classes.sidebarIcon} />
                Edit Profile
              </li>
              <li className={classes.sidebarListItem}>
                <Lock className={classes.sidebarIcon} />
                Change password
              </li>
              <li className={classes.sidebarListItem}>
                <Brightness4 className={classes.sidebarIcon} />
                Dark Mode
              </li>
              <li className={classes.sidebarListItem}>
                <SwapVert className={classes.sidebarIcon} />
                Sign Up
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export { SideBar };
