/** @format */

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  activeUsers: {
    flex: 4,
    boxShadow: "2px 4px 10px 1px rgb(201 201 201 / 47%)",
    padding: 10,
    marginLeft: 20,
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

  //ProgressCheck

  progressCheck: {
    marginTop: 20,
    display: "flex",
    "@media (max-width: 1232px)": {
      display: "grid",
      marginTop: 40,
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 853px)": {
      display: "grid",
      marginTop: 40,
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },

  mainContainer: {
    "@media (max-width: 1270px)": {
      marginTop: 20,
    },
  },

  progressContainer: {
    display: "flex",
  },

  logo: {
    marginRight: 4,
  },

  title: {
    color: "#67748E",
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "Inter, sans-serif",
    marginRight: 60,
  },

  //PROGRESS BAR LINE

  progressBarLine: {
    width: 80,
    marginLeft: 4,
  },
});
