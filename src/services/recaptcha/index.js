/** @format */

import { firebase } from "../firebase/config";

function initializeRecaptcha() {
  return (window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: () => {
        console.log("Recaptca verified");
      },
      defaultCountry: "IN",
    }
  ));
}

export { initializeRecaptcha };
