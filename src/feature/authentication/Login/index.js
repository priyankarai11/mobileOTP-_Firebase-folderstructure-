/** @format */

import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "../../../components/loginPage";
import Otp from "../Otp";
import { signInWithMobileNumber } from "../../../services/firebase";
import { firebase, db } from "../../../services/firebase/config";
import { PHONE_ERROR } from "../../../constants";

function Index() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [helperTextMobileNumber, setHelperTextMobileNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setMobileNumber(e.target.value);
  };

  const checkUserRole = async () => {
    const snapshot = await firebase.firestore().collection("User").get();
    let result = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.role,
    }));
    result.forEach((ele) => {
      if (ele.mobile === mobileNumber) return setUserRole(ele.role);
    });
  };

  const validateMobileNumber = (value) => {
    let hasError = false;
    if (value === "" || value.length !== 10) {
      setHelperTextMobileNumber(PHONE_ERROR);
      hasError = true;
    } else {
      setHelperTextMobileNumber("");
    }
    return hasError;
  };

  const signin = async (e) => {
    e.preventDefault();

    const validMobileNumber = validateMobileNumber(mobileNumber);
    if (validMobileNumber) return;

    const phoneNumber = "+91" + mobileNumber;
    setLoading(true);
    const checkNumber = await db
      .collection("User")
      .where("mobile", "==", mobileNumber)
      .get();
    if (checkNumber?.docs[0]?.id) {
      console.log("Entered mobile number", phoneNumber);
      signInWithMobileNumber(phoneNumber, setShowOtp);
      setLoading(false);
      checkUserRole();
    } else {
      setLoading(false);
      setTimeout(() => {
        toast.error("user not found", {
          position: toast.POSITION.TOP_CENTER,
        });
      }, 2000);
      setMobileNumber("");
    }
  };

  return showOtp ? (
    <Otp userRole={userRole} />
  ) : (
    <Login
      helperTextMobileNumber={helperTextMobileNumber}
      loading={loading}
      signin={signin}
      handleChange={handleChange}
      mobileNumber={mobileNumber}
    />
  );
}

export default Index;
