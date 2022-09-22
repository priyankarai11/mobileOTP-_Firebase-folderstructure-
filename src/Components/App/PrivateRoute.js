/** @format */

// /** @format */

import React from "react";
import { Navigate , Outlet} from "react-router";

function PrivateRoute() {
  const auth = localStorage.getItem("checkNumber");
  return auth ? <Outlet/> : <Navigate replace to="/" />

}

export { PrivateRoute };
