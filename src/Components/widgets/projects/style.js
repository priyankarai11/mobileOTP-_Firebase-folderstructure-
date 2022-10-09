/** @format */

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  project: {
    flex: 6,
    boxShadow: "2px 4px 10px 1px rgb(201 201 201 / 47%)",
    padding: 15,
  },

  projectContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 15,
  },

  title: {
    color: "#252F40",
    fontWeight: 700,
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
  },

  desc: {
    marginTop: 10,
    color: "#67748E",
    fontWeight: 600,
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
  },

  percentage: {
    color: "#17C1E8",
    fontWeight: 700,
    margin: 5,
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
  },

  //TABS SECTION

  tab: {
    "&.MuiTab-root": {
      minWidth: 50,
    },
  },

  tabLabel: {
    marginTop: 12,
    color: "#8392AB",
    fontWeight: 600,
    fontSize: 12,
    fontFamily: "Inter, sans-serif",
    marginRight: 80,
  },

  //TABLE SECTION

  tableRow: {
    width: 30,
  },

  flag: {
    borderBottom: "none",
  },

  currency: {
    color: "#252F40",
    fontWeight: 600,
    fontSize: 12,
    fontFamily: "Inter, sans-serif",
    borderBottom: "none",
  },

  total: {
    color: "#17AD37",
    fontWeight: 600,
    fontSize: 13,
    fontFamily: "Inter, sans-serif",
    borderBottom: "none",
  },

  days: {
    color: "#8392AB",
    fontWeight: 400,
    fontSize: 13,
    fontFamily: "Inter, sans-serif",
    borderBottom: "none",
  },

  etc: {
    color: "#545454",
    borderBottom: "none",
  },

  // etcNextPage: {
  //   padding: 6,
  //   background: "#8392AB",
  //   width: 12,
  //   height: 12,
  //   marginTop: 26,
  //   display: "flex",
  //   alignItems: "center",
  //   borderRadius: 8,
  // },
});
