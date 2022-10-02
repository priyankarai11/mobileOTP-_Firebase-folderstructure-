/** @format */
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts";

function PrivateRoute() {
  const currentUser = useContext(AuthContext);
  console.log("private", currentUser);
  return currentUser ? <Outlet /> : <Navigate replace to="/" />;
}

export { PrivateRoute };
