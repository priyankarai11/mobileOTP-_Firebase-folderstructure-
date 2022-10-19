/** @format */

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  myActitvity: {
    flex: 4,
    boxShadow: "2px 4px 10px 1px rgb(201 201 201 / 47%)",
    padding: 10,
    position: "relative",
    margin: 20,
    "@media (max-width: 590px)": {
      marginRight: 0,
    },
  },

  arrow: {
    position: "absolute",
    top: 12,
    right: 30,
    background: "#E9E9E9",
    borderRadius: 20,
    padding: 4,
    color: "#ffffff",
    width: 20,
    height: 20,
  },

  settings: {
    position: "absolute",
    top: 395,
    right: -5,

    padding: 10,
    background: "#ffffff",
    borderRadius: 24,
    boxShadow: "2px 4px 10px 1px rgb(145 93 93/47%)",
  },
});
