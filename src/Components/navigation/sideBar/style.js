/** @format */

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  sidebar: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0px 20px 27px rgb(201 201 201 / 47%)",
    height: 915,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
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
    color: "#141414",
  },

  line: {
    height: 0,
    border: "0.5px solid rgb(230,227,227)",
  },

  sidebarTitle: {
    fontSize: 13,
    fontWeight: 700,
    fontFamily: "Inter, sans-serif",
    color: "#67748E",
    marginLeft: 12,
    marginTop: 35,
  },

  sidebarList: {
    listStyle: "none",
    padding: 5,
  },

  sidebarListItemActive: {
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "Inter, sans-serif",
    padding: 14,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    color: "#003865",
    letterSpacing: 0.3,
    // "&.active": {
    //   background: "red",
    // },
  },

  sidebarListItem: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
    padding: 12,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    color: "#7D7D7D",
    letterSpacing: 0.3,
  },

  sidebarIconActive: {
    marginRight: 16,
    color: "#ffffff",
    background: "#003865",
    borderRadius: 8,
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.09)",
    width: 25,
    height: 25,
    padding: 3,
  },

  sidebarIcon: {
    marginRight: 16,
    color: "#003865BA",
    background: "#E9ECEF",
    borderRadius: 8,
    width: 25,
    height: 25,
    padding: 3,
  },

  logOut: {
    marginLeft:20,
    width: 150,
    borderRadius: 8,
    color: "#ffffff",
    background: "#003865",
    fontSize: 12,
    fontWeight: 700,
    fontFamily: "Inter, sans-serif",
  },
});
