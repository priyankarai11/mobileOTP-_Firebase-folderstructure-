/** @format */

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  activeUsers: {
    flex: 4,
    boxShadow: "2px 4px 10px 1px rgb(201 201 201 / 47%)",
    padding: 10,
  },

  userActivity: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
  },

  active: {
    color: "#252F40",
    fontSize: 16,
    fontWeight: 700,
    fontFamily: "Inter, sans-serif",
  },

  percentage: {
    marginTop: 5,
    color: "#67748E",
    fontSize: 14,
    fontWeight: 700,
    fontFamily: "Inter, sans-serif",
  },

  lastWeek: {
    color: "#252F40",
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Inter, sans-serif",
  },
});
