/** @format */

import InfoCard from "../../../assets/images/infoCard.svg";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  workWithRockets: {
    position: "relative",
    flex: 4,
    marginLeft: 20,
    boxShadow: "2px 4px 10px 1px rgb(201 201 201 / 47%)",
    padding: "10px 20px",
    height: "92%",
    backgroundImage: `url(${InfoCard})`,
    backgroundSize: "cover",
    borderRadius: "0.75rem",
    "@media (max-width: 991px)": {
      height: "250%",
      marginTop: 50,
    },
    "@media (max-width: 690px)": {
      height: "320%",
      marginTop: 50,
    },
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
    lineHeight: 1.7,
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
  },

  readMore: {
    position: "absolute",
    bottom: 30,
    left: 65,
    color: "#ffffff",
    fontWeight: 600,
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
  },

  infoCard: {
    // marginLeft: 25,
    // margin: "auto",
    // display: "block",
    // maxWidth: "100%",
    // maxHeight: "100%",
  },

  arrow: {
    position: "absolute",
    left: 140,
    bottom: 27,
    color: "#ffffff",
    width: 19,
  },

});
