/** @format */

import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/firebase";
import { DiamondShape } from "../diamondMask";
import { MENU } from "./constant";
import { useStyles } from "./style";

function SideBar() {
  const [active, setActive] = useState(1);
  const classes = useStyles();
  const navigate = useNavigate();

  const handleActiveState = (id) => {
    setActive(id);
  };

  async function handleLogOut() {
    try {
      await logout();
      navigate("/");
      console.log("user signed out");
    } catch {
      console.log("user not signed out");
    }
  }

  return (
    <div className={classes.sidebar}>
      <div className={classes.sideBarMenu}>
        <h3 className={classes.sidebarTitleHeader}>USER Dashboard</h3>
        <hr className={classes.line} />
        <ul className={classes.sidebarList}>
          {MENU.map((ele) => {
            return (
              <div>
                <li
                  className={
                    ele.id === active
                      ? classes.sidebarListItemActive
                      : classes.sidebarListItem
                  }
                  onClick={() => handleActiveState(ele.id)}
                >
                  <span
                    className={
                      ele.id === active
                        ? classes.sidebarIconActive
                        : classes.sidebarIcon
                    }
                  >
                    {ele.logo}
                  </span>
                  {ele.name}
                </li>
                {ele.id === 4 ? (
                  <h3 className={classes.sidebarTitle}>ACCOUNT SETTING</h3>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </ul>
        <Button className={classes.logOut} onClick={handleLogOut}>
          LogOut
        </Button>
      </div>
      <DiamondShape />
    </div>
  );
}

export { SideBar };
