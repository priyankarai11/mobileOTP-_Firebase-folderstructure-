/** @format */

// /** @format */

import React from "react";
import { Navigate } from "react-router";
import LoginPage from "../../feature/authentication/Login";

const PublicRoute = () => {
  const auth = localStorage.getItem("checkNumber");

  return auth && auth !== undefined ? (
    <Navigate replace to="/dashboard" />
  ) : (
    <LoginPage />
  );
};

export { PublicRoute };
