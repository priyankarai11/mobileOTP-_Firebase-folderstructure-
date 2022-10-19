/** @format */

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  home: {
    display: "flex",
    margin: " 25px 20px",
  },

  homeContainer: {
   // flex: 5,
    marginTop: 40,
  },

  widgets: {
    display: "flex",
    padding: 20,
    gap: 20,
    "@media (max-width: 1170px)": {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 740px)": {
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },

  softandWorkWithRockets: {
    display: "flex",
    padding: 20,
    gap: 20,
    "@media (max-width: 1170px)": {
      display: "grid",
      gridTemplateRows: "repeat(2, 1fr)",
    },
    "@media (max-width: 962px)": {
      display: "grid",
      gridTemplateRows: "repeat(1, 1fr)",
    },
  },
});
