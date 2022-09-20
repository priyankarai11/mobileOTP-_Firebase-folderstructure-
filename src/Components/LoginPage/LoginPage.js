/** @format */

import React, { useEffect, useState } from "react";
import { Box, Button } from "@material-ui/core";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingOverlay from "react-loading-overlay";
import { RotatingLines } from "react-loader-spinner";
import { firebase, db } from "./firebase";
import GirlImage from "../../Assets/Images/girl.svg";
import Ellipse_1 from "../../Assets/Images/Ellipse_1.svg";
import Ellipse_2 from "../../Assets/Images/Ellipse_2.svg";
import {TOAST} from "../NewUser/constant"
import { useStyles } from "./style";

function LoginPage() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [number, setNumber] = useState("");
  const [ErrorNumber, setErrorNumber] = useState(false);
  const [Loading, setLoading] = useState(false);
 
  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  //sessionStorage.setItem("num", number)

  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          console.log("response", response);
          onSignInSubmit();
          console.log("Recaptca varified");
        },
        defaultCountry: "IN",
      }
    );
  };



  const onSignInSubmit = async (e) => {
    e.preventDefault();
    
    if (number === "" || number.length !== 10) {

      setErrorNumber(true);
      console.log("Number is not valid")
    } else {
    
      setErrorNumber(false)
      configureCaptcha();
      const phoneNumber = "+91" + number;
      console.log(phoneNumber);
      
      const checkNumber = await db
        .collection("User")
        .where("mobile", "==", number)
        .get();
      
      console.log("checkNumber", checkNumber?.docs[0]?.id);
      if (checkNumber?.docs[0]?.id) {
        const appVerifier = window.recaptchaVerifier;
        const snapshot = await firebase.firestore().collection("User").get();
        let userRole = snapshot.docs.map((doc, i) => doc.data().role);
        setLoading(false);
        sessionStorage.setItem("canLogin", true);
        console.log(userRole[0]);
        firebase
          .auth()
          .signInWithPhoneNumber(phoneNumber, appVerifier)
          .then((confirmationResult) => {
            navigate("/getOTP", {
              state: {
                role: userRole[0],
              },
            });
            window.confirmationResult = confirmationResult;
            console.log("OTP has been sent");
          })
          .catch((error) => {
            setLoading(false);
            console.log(error.message);
            setNumber('')
          });
      } else {
        setLoading(false);
        sessionStorage.setItem("canLogin", false);
        setTimeout(() => {
           toast.error(TOAST, {
             position: toast.POSITION.TOP_CENTER,
           });
        },2000)
      }
    }
  };

  return (
    <div className={classes.centered}>
      <LoadingOverlay
        active={Loading}
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
            <div id="sign-in-button" />
            <span className={classes.loginHeading}>Login Page</span>
            <img className={classes.grlImage}  src={GirlImage} alt="girlImage" />
            <span className={classes.enterMobileNumb}>
              Enter your mobile number
            </span>
            <input
              type="number"
              name="mobile"
              pattern="[0-9]"
              value={number}
              onChange={handleChange}
              className={classes.inputField}
              placeholder="example:1234567890"
            />
            {ErrorNumber && (
              <span className={classes.errorMessage}>
                Please Enter valid mobile number
              </span>
            )}
            <Button onClick={onSignInSubmit} className={classes.buttonShow}>
              Send OTP
            </Button>
            <Link
              className={classes.newUser}
              to={{
                pathname: "/NewUser",
              }}
            >
              {" "}
              New User? Click here
            </Link>
          </Box>
          <ToastContainer />
        </form>
      </LoadingOverlay>
    </div>
  );
}

export default LoginPage;
