/** @format */

import React, { useState, useEffect } from "react";
import { firebase } from "../services/firebase/config";
import { AuthContextProvider } from ".";

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    (async function () {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          firebase
            .auth()
            .currentUser.getIdToken()
            .then((token) => setCurrentUser(token));
        } else {
          setCurrentUser();
        }
      });
    })();
  }, []);

  return (
    <AuthContextProvider value={currentUser}>{children}</AuthContextProvider>
  );
}

export { AuthProvider };
