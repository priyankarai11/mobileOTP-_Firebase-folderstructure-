/** @format */

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  salesOverview: {
    justifyContent: "space-around",
    flex: 5,
    boxShadow: "2px 4px 10px 1px rgb(201 201 201 / 47%)",
    padding: 10,
    "@media (max-width: 991px ) ": {
      margin: 20,
    },
    "@media (max-width: 690px ) ": {
      margin: 20,
    },
  },

  salesContainer: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },

  overview: {
    color: "#252F40",
    fontSize: 16,
    fontWeight: 700,
    fontFamily: "Inter, sans-serif",
    marginLeft: 8,
  },

  arrow: {
    color: "green",
    marginTop: -5,
    marginLeft: 5,
    width: 20,
  },

  more: { marginRight: 5 },
  // percentage: {
  //   marginTop: 3,
  //   position: "absolute",
  //   color: "#67748E",
  //   right: 475,
  //   top: 26,
  //   fontSize: 14,
  //   fontWeight: 600,
  //   fontFamily: "Inter, sans-serif",
  // },

  percentage: {
    marginTop: 17,
    color: "#67748E",
    fontSize: 14,
    fontWeight: 700,
    fontFamily: "Inter, sans-serif",
    display: "flex",
  },

  year: {
    color: "#252F40",
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Inter, sans-serif",
  },

  lineChart: {
    marginTop: 90,
    "@media (max-width: 991px ) ": {
      marginTop: 30,
    },
  },
});
