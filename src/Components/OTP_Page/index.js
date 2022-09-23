/** @format */

import React from "react";
import { Box, Button } from "@material-ui/core";
import OtpInput from "react-otp-input";
import Ellipse_1 from "../../assets/images/ellipse_1.svg";
import Ellipse_2 from "../../assets/images/ellipse_2.svg";
import OTPGirl from "../../assets/images/otpgirl.svg";
import { useStyles } from "../loginPage/style";
import { useStyle } from "./style";

function Otp({ otp, handleChange, validateOtp }) {
  const classes = useStyles();
  const styles = useStyle();

  return (
    <div className={classes.centered}>
      <img className={classes.ellipse_1} src={Ellipse_1} alt="Ellipse_1" />
      <form>
        <Box className={classes.cardDisplay}>
          <img className={classes.ellipse_11} src={Ellipse_1} alt="Ellipse_1" />
          <img className={classes.ellipse_2} src={Ellipse_2} alt="Ellipse_2" />
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
          <Button onClick={validateOtp} className={classes.buttonShow}>
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Otp;
