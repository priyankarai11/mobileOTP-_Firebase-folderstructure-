/** @format */
import { firebase } from "./config";
import { initializeRecaptcha } from "../recaptcha";

let firebaseVerifier = null;

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
};

function verifyOtp(otp, navigate) {
  const promise = new Promise((resolve, reject) => {
    if (firebaseVerifier) {
      firebaseVerifier
        .confirm(otp)
        .then((res) => {
          console.log(res);
          resolve("Otp is verified by user");
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
}

function logout() {
  return firebase.auth().signOut();
}

export {
  signInWithMobileNumber,
  verifyOtp,
  firebaseVerifier,
  logout,
};
