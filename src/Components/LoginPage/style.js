/** @format */

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  centered: {
    background: "linear-gradient(to right top,#A8D930B2, #A8D93000)",
    height: 720,
  },

  cardDisplay: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    maxWidth: 400,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: "auto",
    top: 105,
    padding: 3,
    boxShadow: "5px 5px 10px #ccc",
    background: "linear-gradient( #ffffff , #ffffff, #ffffff )",
  },

  loginHeading: {
    position: "inherit",
    padding: 20,
    textAlign: "center",
    fontWeight: 700,
    fontSize: 30,
    fontFamily: "Inter, sans-serif",
    color: "#3D3939",
    fontStyle: "normal",
  },

  ellipse_1: {
    position: "absolute",
  },

  ellipse_11: {
    position: "absolute",
    top: 0,
    width: 354,
    borderRadius: 15,
    right: 52,
    // zIndex:-1,
  },

  ellipse_2: {
    right: 0,
    width: 300,
    borderRadius: 10,
    // zIndex: -1,
    position: "absolute",
    top: 0,
  },

  grlImage: {
    position: "inherit",
  },

  enterMobileNumb: {
    margin: "20px 130px 10px 0px",
    fontFamily: "Inter, sans-serif",
    fontSize: 15,
    fontWeight: 400,
  },

  inputField: {
    width: "76%",
    height: 40,
    borderRadius: 8,
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: 12,
      fontSize: 14,
    },
    "& .MuiFormHelperText-contained": {
      marginLeft: 2,
      fontSize: 14,
      color: "#e74c3c",
    },
  },

  buttonShow: {
    "&.MuiButton-root": {
      background: "#14224A",
      margin: 30,
      textTransform: "none",
      color: "#ffffff",
      width: 310,
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

  tellInfo: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
    margin: "20px 10px 10px 0px",
    fontFamily: "Inter, sans-serif",
    fontSize: 15,
    fontWeight: 400,
  },

  getotpgirlImage: {
    position: "inherit",
    height: 216,
  },

  newUser: {
    position: "relative",
    bottom: 15,
    cursor: "pointer",
  },

  errorMessage: {
    position: "relative",
    color: "red",
    marginRight: 70,
    top: 12,
  },

  Loader: {
    position: "absolute",
    height: 721,
  },
});
