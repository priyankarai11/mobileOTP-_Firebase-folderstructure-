/** @format */

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  sidebar: {
    flex: 1,
    borderRight: "0.5px solid rgb(230,227,227)",
    minHeight: "100vh",
    backgroundColor: "white",
  },

  sidebarWrapper: {
    padding: 20,
    color: "555",
  },

  sidebarMenu: {
    marginBottom: 10,
  },

  sidebarTitleHeader: {
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "Inter, sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontStyle: "normal",
    marginBottom: 20,
  },

  line: {
    height: 0,
    border: "0.5px solid rgb(230,227,227)",
  },

  sidebarTitle: {
    fontSize: 13,
    fontWeight: 700,
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
  },

  sidebarList: {
    listStyle: "none",
    padding: 5,
  },

  sidebarListItem: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
    padding: 10,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },

  sidebarIcon: {
    marginRight: 16,
  },
});
