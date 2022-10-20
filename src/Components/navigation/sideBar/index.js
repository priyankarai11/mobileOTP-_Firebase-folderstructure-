/** @format */

import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Menu } from "@material-ui/icons";
import { logout } from "../../../services/firebase";
import { DiamondShape } from "../diamondMask";
import { MENU } from "./constant";
import { useStyles } from "./style";

function SideBar() {
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();

  const handleActiveState = (id) => {
    setActive(id);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 991) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <div className={!open ? classes.sidebar : classes.sidenavClosed}>
      <div className={classes.sideBarMenu}>
        <div className={classes.menuSection}>
          <Menu className={classes.menuBtn} onClick={toggleOpen} />
          {!open && <h3 className={classes.sidebarTitleHeader}>Dashboard</h3>}
        </div>
        <hr className={classes.line} />
        <ul className={classes.sidebarList}>
          {MENU.map((ele) => {
            return (
              <NavLink key={ele.id} className={classes.sideitem}>
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
                  {!open && ele.name}
                </li>
                {!open && ele.id === 4 ? (
                  <h3 className={classes.sidebarTitle}>ACCOUNT SETTING</h3>
                ) : (
                  ""
                )}
              </NavLink>
            );
          })}
        </ul>
        {!open && (
          <Button className={classes.logOut} onClick={handleLogOut}>
            LogOut
          </Button>
        )}
      </div>
      {!open && <DiamondShape />}
    </div>
  );
}

export { SideBar };
