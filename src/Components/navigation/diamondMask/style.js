/** @format */

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  diamondShape: {
    position: "relative",
  },

  diamond: {
    marginLeft: 10,
  },

  shape: {
    position: "absolute",
    top: 16,
    left: 30,
    padding: 6,
    background: "#ffffff",
    borderRadius: 6,
  },

  title: {
    position: "absolute",
    top: 65,
    left: 30,
    color: "#ffffff",
    fontWeight: 600,
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
  },

  desc: {
    position: "absolute",
    top: 90,
    left: 30,
    width: "66%",
    color: "#ffffff",
    fontWeight: 400,
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
  },

  documentation: {
    position: "absolute",
    top: 125,
    left: 30,
    width: 175,
    borderRadius: 8,
    background: "#ffffff",
    fontSize: 12,
    fontWeight: 700,
    fontFamily: "Inter, sans-serif",
  },
});
