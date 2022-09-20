
import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles({
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
    margin: "auto",
    top: 105,
    padding: 3,
    boxShadow: "5px 5px 10px #ccc",
    background: "linear-gradient( #A8D930B2 , #ffffff, #ffffff )",
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
    "&.MuiButton-root.Mui-disabled": {
      opacity: 0.5,
      background: "#8293c1",
    },
  },

  loginHeading: {
    padding: 20,
    textAlign: "center",
    fontWeight: 700,
    fontSize: 30,
    fontFamily: "Inter, sans-serif",
    color: "#3D3939",
    fontStyle: "normal",
  },

  formInputFields: {
    width: "75%",
  },

  girlImage: {
    height: 180,
  },

  alreadyUser: {
    position: "relative",
    bottom: 15,
    cursor: "pointer",
  },
});