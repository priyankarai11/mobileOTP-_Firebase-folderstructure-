/** @format */

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  centered: {
    background: "linear-gradient(to right top,#A8D930B2, #A8D93000)",
    height: 720,
    fontSize: 30,
  },

  dashboardText: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
      textAlign: "center",
    },
  
    userRole: {
      marginLeft:10,
  },

  logOut: {
    "&.MuiButton-root": {
      background: "#14224A",
      margin: "auto",
      display: "flex",
      textAlign: "center",
      alignItems: "center",
      textTransform: "none",
          color: "#ffffff",
      top:100,
      width: 210,
      borderRadius: 10,
      border: "1px solid #14224A",
      fontFamily: "Inter, sans-serif",
      fontWeight: 400,
      fontSize: 14,
    },
    "&.MuiButton-root:hover": {
      background: "#1b306c",
    },
  },
});
