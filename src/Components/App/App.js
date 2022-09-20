/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import Otp from "../OTP_Page/Otp";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import NewUser from "../NewUser/NewUser";
import NotFoundPage from "../NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/NewUser"
          element={
              <NewUser />
          }
        />
        <Route
          path="/getOTP"
          element={
            <PrivateRoute>
              <Otp />
            </PrivateRoute>
          }
        />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
