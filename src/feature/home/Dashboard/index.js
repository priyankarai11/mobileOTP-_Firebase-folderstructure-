/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import WelcomePage from "../../../components/welcomePage";

function Index() {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return <WelcomePage logOut={logOut} />;
}

export default Index;
