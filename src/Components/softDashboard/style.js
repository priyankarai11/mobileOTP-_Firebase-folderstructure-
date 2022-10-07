/** @format */

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  softDashboard: {
    display: "flex",
    justifyContent: "space-around",
    flex: 6,
    boxShadow: "2px 4px 10px 1px rgb(201 201 201 / 47%)",
    padding: 10,
  },

  left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "50%",
    padding: 20,
    // margin: 20,
    // width: 217,
  },

  right: {
    display: "flex",
  },

  title: {
    color: "#67748E",
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    width: 260,
  },

  mainTitle: {
    color: "#252F40",
    fontSize: 20,
    fontWeight: 700,
    fontFamily: "Inter, sans-serif",
  },

  info: {
    width: 275,
    color: "#67748E",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: 14,
    fontStyle: "normal",
    lineHeight: 2,
  },

  rocket: {
    // width: "100%",
  },
});
