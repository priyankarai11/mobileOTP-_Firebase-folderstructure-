
/** @format */

import { Navigate } from "react-router";
import { db } from "../LoginPage/firebase";

function PrivateRoute({ children }) {
    const number = sessionStorage.getItem('num')
    const auth = sessionStorage.getItem("canLogin")
    return number && auth  ? children : <Navigate replace to='/login' /> 
   
}

export default PrivateRoute;
