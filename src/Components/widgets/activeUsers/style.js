/** @format */

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  activeUsers: {
    flex: 4,
    boxShadow: "2px 4px 10px 1px rgb(201 201 201 / 47%)",
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    "@media (max-width: 590px)": {
      marginRight: 0,
    },
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
    "@media (max-width: 657px)": {
      display: "grid",
      margin: "10px 20px",
      gridTemplateColumns: "repeat(2, 2fr)",
    },
  },

  mainContainer: {
    "@media (max-width: 1270px) ": {
      width: 70,
    },
    "@media (max-width: 1170px and min-width:991px) ": {
      width: 75,
    },
    "@media (max-width: 990px ) ": {
      marginLeft: 50,
    },
    "@media (max-width: 790px ) ": {
      width: 50,
      margin: "10px 40px",
    },
    "@media (max-width: 743px ) ": {
      width: 50,
      margin: "15px 30px",
    },

    // "@media (max-width:791px) ": {
    //   display: "grid",
    //   gridTemplateColumns: "repeat(2, 1fr)",
    // },
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
