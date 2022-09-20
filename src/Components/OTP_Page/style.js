

import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles({
  inputStyle: {
    border: "1px solid black",
    borderRadius: "8px",
    height: 20,
    padding: 10,
    fontSize: "16px",
    color: "#000",
    fontWeight: 400,
    caretColor: "blue",
  },

  focusStyle: {
    border: "1px solid #CFD3DB",
    outline: "none",
  },

  separator: {
    width: 15,
  },

  home: {
    position: "relative",
    bottom: 15,
    cursor: "pointer",
    left: 90,
  },

  resendOTP: {
    position: "absolute",
    bottom: 15,
    cursor: "pointer",
    left: 50,
    color: "#3d3dd4",
  },
});

