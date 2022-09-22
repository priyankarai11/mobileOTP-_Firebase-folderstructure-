/** @format */
import { firebase } from "./config";
import { initializeRecaptcha } from "../recaptcha";

let firebaseVerifier = null;
let showOtp = false;

const signInWithMobileNumber = (phoneNumber, setShowOtp) => {
  const promise = new Promise((resolve, reject) => {
    const appVerifier = initializeRecaptcha();
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((result) => {
        firebaseVerifier = result;
        resolve("code  has been sent your registered mobile number");
        setShowOtp(true);
      })
      .catch(() => {
        reject("code not been sent");
      });
  });
  promise
    .then((message) => console.log(message))
    .catch((message) => console.log(message));
  return promise;
};

function verifyOtp(otp, navigate) {
  const promise = new Promise((resolve, reject) => {
    if (firebaseVerifier) {
      firebaseVerifier
        .confirm(otp)
        .then(() => {
          resolve("Otp is verified by user");
          localStorage.setItem("checkNumber", true);
          navigate("/dashboard");
        })
        .catch(() => {
          reject("wrong otp");
        });
    }
  });

  promise
    .then((message) => console.log(message))
    .catch((message) => console.log(message));
  return promise;
}

export { signInWithMobileNumber, verifyOtp, firebaseVerifier, showOtp };
