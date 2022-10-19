/** @format */

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  home: {
    display: "flex",
    margin: " 25px 20px",
  },

  homeContainer: {
    flex: 5,
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

  boxConatiner: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    "@media (max-width: 991px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },

  activeAndSalesConatiner: {
    marginTop: 50,
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    "@media (max-width:991px)": {
      marginTop: 200,
      gridTemplateColumns: "repeat(1, 1fr)",
    },
    "@media (max-width:690px)": {
      marginTop: 250,
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },

  projectAndActivity: {
    marginTop: 30,
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    "@media (max-width:991px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
});
