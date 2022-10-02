/** @format */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import LoginPage from "../../feature/authentication/Login";
import { AuthContext } from "../../contexts";

function PublicRoute() {
  const currentUser = useContext(AuthContext);
  console.log("public", currentUser);
  return currentUser && currentUser !== undefined ? (
    <Navigate replace to="/dashboard" />
  ) : (
    <LoginPage />
  );
}

export { PublicRoute };
