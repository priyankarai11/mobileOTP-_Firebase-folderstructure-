/** @format */

import React from "react";
import { Box, Button, TextField } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingOverlay from "react-loading-overlay";
import { RotatingLines } from "react-loader-spinner";
import GirlImage from "../../assets/images/girl.svg";
import Ellipse_1 from "../../assets/images/ellipse_1.svg";
import Ellipse_2 from "../../assets/images/ellipse_2.svg";
import { useStyles } from "./style";

function Login({
  loading,
  helperTextMobileNumber,
  signin,
  handleChange,
  mobileNumber,
}) {
  const classes = useStyles();

  return (
    <div className={classes.centered}>
      <LoadingOverlay
        active={loading}
        spinner={<RotatingLines />}
        styles={{
          overlay: (base) => ({
            ...base,
            background: "rgb(57 72 58 / 67%)",
            height: 721,
          }),
        }}
      >
        <img className={classes.ellipse_1} src={Ellipse_1} alt="Ellipse_1" />
        <form>
          <Box className={classes.cardDisplay}>
            <img
              className={classes.ellipse_11}
              src={Ellipse_1}
              alt="Ellipse_1"
            />
            <img
              className={classes.ellipse_2}
              src={Ellipse_2}
              alt="Ellipse_2"
            />
            <div id="recaptcha-container" />
            <span className={classes.loginHeading}>Login Page</span>
            <img className={classes.grlImage} src={GirlImage} alt="girlImage" />
            <span className={classes.enterMobileNumb}>
              Enter your mobile number
            </span>
            <TextField
              variant="outlined"
              value={mobileNumber}
              onChange={handleChange}
              className={classes.inputField}
              error={helperTextMobileNumber === "" ? false : true}
              helperText={helperTextMobileNumber}
            />
            <Button onClick={signin} className={classes.buttonShow}>
              Send OTP
            </Button>
          </Box>
          <ToastContainer />
        </form>
      </LoadingOverlay>
    </div>
  );
}

export default Login;
