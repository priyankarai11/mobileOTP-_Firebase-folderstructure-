/** @format */

import React, { useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import { TABLE_VALUE } from "./constant";
import { useStyles } from "./style";

function IncomeTable() {
  const classes = useStyles();
  const [active, setActive] = useState(1);

  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <Table>
      <TableBody>
        {TABLE_VALUE.map((ele) => {
          return (
            <TableRow className={classes.tableRow}>
              <TableCell className={classes.flag}>
                <img src={ele.flag} alt="flag" />
              </TableCell>
              <TableCell className={classes.currency}>{ele.currency}</TableCell>
              <TableCell className={classes.total}>{ele.total}</TableCell>
              <TableCell className={classes.days}>{ele.days}</TableCell>
              <TableCell
                onClick={() => handleClick(ele.id)}
                className={classes.etc}
                //className={ active===ele.id ? classes.etcNextPage: classes.etc }
              >
                {ele.etc}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export { IncomeTable };
