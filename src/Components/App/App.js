/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";
import LoginPage from "../../feature/authentication/Login";
import Dashboard from "../../feature/home/Dashboard";
import { PrivateRoute } from "./privateRoute";
import { PublicRoute } from "./publicRoute";
import NotFoundPage from "../notFound/notFound";
//import NewUser from "../newUser";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route element={<LoginPage />} path="/" />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route element={<Dashboard />} path="/dashboard" />
          </Route>

          <Route path="/*" element={<NotFoundPage />} />

          {/* <Route path="/NewUser" element={<NewUser />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
