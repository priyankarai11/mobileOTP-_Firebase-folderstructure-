/** @format */

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  workWithRockets: {
    position: "relative",
    flex: 4,
    marginLeft: 50,
    boxShadow: "2px 4px 10px 1px rgb(201 201 201 / 47%)",
    padding: 10,
  },

  title: {
    position: "absolute",
    top: 35,
    left: 65,
    color: "#ffffff",
    fontWeight: 700,
    fontSize: 20,
    fontFamily: "Inter, sans-serif",
  },

  desc: {
    position: "absolute",
    top: 70,
    left: 65,
    width: "66%",
    color: "#ffffff",
    fontWeight: 400,
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
  },

  readMore: {
    position: "absolute",
    bottom: 51,
    left: 65,
    color: "#ffffff",
    fontWeight: 600,
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
  },

  infoCard: {
    marginLeft: 25,
  },

  arrow: {
    position: "absolute",
    left: 140,
    bottom: 48,
    color: "#ffffff",
    width: 19,
  },
});
