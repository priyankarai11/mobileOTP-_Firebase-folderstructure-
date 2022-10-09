/** @format */

import React, { useState } from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { IncomeTable } from "./incomeTable";
import { useStyles } from "./style";

function TabCompo() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <div className={classes.tabContainer}>
      <Tabs
        value={value}
        TabIndicatorProps={{
          style: {
            width: "65px",
            backgroundColor: "#8392AB",
            marginLeft: 8,
            height: "3px",
          },
        }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Tab label={<span className={classes.tabLabel}>Income</span>} />
        <Tab label={<span className={classes.tabLabel}>Expenses</span>} />
      </Tabs>
      {value === 0 ? <IncomeTable /> : "yet to be updated"}
    </div>
  );
}

export { TabCompo };
