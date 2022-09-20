/** @format */

import React from "react";
import { Navigate } from "react-router";
import LoginPage from "../LoginPage/LoginPage";

function  PublicRoute() {
  const number = sessionStorage.getItem("num");
  console.log(number);
  if (number && number !== undefined) {
    sessionStorage.clear();
    return <Navigate replace to="/login" />;
  } else return <LoginPage />;
}

export default PublicRoute;
