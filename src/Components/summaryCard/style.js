/** @format */

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  summaryCard: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
    padding: 10,
    boxShadow: "2px 4px 10px 1px rgb(68 65 65 / 41%)",
    borderRadius: 16,
  },

  left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  title: {
    color: "#67748E",
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Inter, sans-serif",
  },

  dollar: {
    color: "#252F40",
    fontSize: 20,
    fontWeight: 700,
    fontFamily: "Inter, sans-serif",
  },

  percentage: {
    color: "#82D616",
    fontSize: 14,
    fontWeight: 700,
    fontFamily: "Inter, sans-serif",
  },
});
