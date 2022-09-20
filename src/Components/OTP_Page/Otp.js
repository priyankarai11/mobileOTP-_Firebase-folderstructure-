/** @format */

import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import OtpInput from "react-otp-input";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { db, firebase } from "../LoginPage/firebase";
import Ellipse_1 from "../../Assets/Images/Ellipse_1.svg";
import OTPGirl from "../../Assets/Images/otpgirl.svg";
import { useStyles } from "../LoginPage/style";
import { useStyle } from "./style";

function Otp() {
  const classes = useStyles();
  const styles = useStyle();
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const num = "+91" + sessionStorage.getItem("num");
  const handleChange = (otp) => setOtp(otp);

  const onSubmitOTP = async (e) => {
    e.preventDefault();
    const code = otp;

    window.confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        console.log(JSON.stringify(user));
        alert("Welcome " + location.state.role);
        setOtp("");
        navigate("/login");
      })
      .catch((error) => {
        console.log("error");
        setOtp("");
      });
  };

  const configureCaptcha = () => {
    //  window.recaptchaVerifier.clear();
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log("response", response);
          ResendOtp();
          console.log("Recaptca verified");
        },
        defaultCountry: "IN",
      }
    );
  };

  
  const ResendOtp = (e) => {
    e.preventDefault();
    console.log(location.state.role);
    configureCaptcha();
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(num, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className={classes.centered}>
      <img className={classes.ellipse_1} src={Ellipse_1} alt="Ellipse_1" />
      <form>
        <Box className={classes.cardDisplay}>
          <div id="recaptcha-container"></div>
          <span className={classes.loginHeading}>OTP Verification</span>
          <img
            className={classes.getotpgirlImage}
            src={OTPGirl}
            alt="otpgirlImage"
          />
          <span className={classes.tellInfo}>
            We will send you one time password to this mobile number
          </span>
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            separator={<span className={styles.separator}></span>}
            isInputNum={true}
            shouldAutoFocus={true}
            inputStyle={styles.inputStyle}
            focusStyle={styles.focusStyle}
          />
          <Button onClick={onSubmitOTP} className={classes.buttonShow}>
            Submit
          </Button>
          <div className={styles.resendOTP} onClick={ResendOtp}>
            {" "}
            Resend OTP
          </div>
          <Link
            className={styles.home}
            onClick={() => {
              sessionStorage.clear();
            }}
            to={{
              pathname: "/login",
            }}
          >
            {" "}
            Go to Home Page
          </Link>
        </Box>
      </form>
    </div>
  );
}

export default Otp;
