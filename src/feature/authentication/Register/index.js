/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewUser from "../../../components/newUser";
import { db } from "../../../services/firebase/config";
import { EMAIL_ERROR, EMAIL_REGEX, NAME_ERROR, PHONE_ERROR } from "./constant";

function Register() {
  const navigate = useNavigate();
  const [enabled, setEnabled] = useState(true);
  const [helperTextName, setHelperTextName] = useState("");
  const [helperTextMobile, setHelperTextMobile] = useState("");
  const [helperTextEmail, setHelperTextEmail] = useState("");
  const [input, setInput] = useState({
    role: "User",
    name: "",
    mobile: "",
    email: "",
  });

  const submitUser = async (e) => {
    e.preventDefault();
    const res = await db.collection("User").add(input);
    console.log(res);
    if (res) navigate("/");
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "name":
        if (value.length > 0) {
          setHelperTextName("");
        } else {
          setHelperTextName(NAME_ERROR);
        }
        break;
      case "mobile":
        if (value.length > 0 && value.length === 10) {
          setHelperTextMobile("");
        } else {
          setHelperTextMobile(PHONE_ERROR);
        }
        break;
      case "email":
        if (EMAIL_REGEX.test(value) && value.length > 0) {
          setHelperTextEmail("");
        } else {
          setHelperTextEmail(EMAIL_ERROR);
        }
        break;
      default:
        break;
    }
    setInput({ ...input, [name]: value });
  };

  const disableButton = () => {
    const { name, mobile, email } = input;
    if (name === "" || mobile === "" || email === "") {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  };

  useEffect(() => {
    disableButton();
  });

  return (
    <NewUser
      input={input}
      handleChange={handleChange}
      helperTextEmail={helperTextEmail}
      helperTextName={helperTextName}
      helperTextMobile={helperTextMobile}
      enabled={enabled}
      submitUser={submitUser}
    />
  );
}

export { Register };
