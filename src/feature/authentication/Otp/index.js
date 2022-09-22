/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyOtp, firebaseVerifier } from "../../../services/firebase";
import Otp from "../../../components/otp_Page";

function Index({ userRole }) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleChange = (otp) => setOtp(otp);

  const validateOtp = () => {
    if (otp === null || firebaseVerifier === null) return;
    verifyOtp(otp, navigate);
    localStorage.setItem("role", userRole);
  };

  return (
    <Otp handleChange={handleChange} validateOtp={validateOtp} otp={otp} />
  );
}

export default Index;
