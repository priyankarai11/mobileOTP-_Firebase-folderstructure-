/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/firebase";
import WelcomePage from "../../../components/welcomePage";

function Index() {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/");
      console.log("user signed out");
    } catch {
      console.log("user not signed out");
    }
  }

  return <WelcomePage handleLogout={handleLogout} />;
}

export default Index;
