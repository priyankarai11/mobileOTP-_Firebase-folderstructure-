/** @format */

import React from "react";
import { Box, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import GirlImage from "../../assets/images/girl.svg";
import { useStyle } from "./style";

function NewUser({
  input,
  handleChange,
  helperTextEmail,
  helperTextName,
  helperTextMobile,
  enabled,
  submitUser,
}) {
  const classes = useStyle();
  return (
    <div className={classes.centered}>
      <Box className={classes.cardDisplay}>
        <span className={classes.loginHeading}>New User</span>
        <img className={classes.girlImage} src={GirlImage} alt="girlImage" />
        <TextField
          value={input.name}
          className={classes.formInputFields}
          id="name"
          type="name"
          name="name"
          label="Enter your name"
          variant="standard"
          onChange={handleChange}
          error={helperTextName === "" ? false : true}
          helperText={helperTextName}
        />

        <TextField
          value={input.email}
          className={classes.formInputFields}
          id="email"
          type="email"
          name="email"
          label="Enter your Email Address"
          variant="standard"
          onChange={handleChange}
          error={helperTextEmail === "" ? false : true}
          helperText={helperTextEmail}
        />

        <TextField
          value={input.mobile}
          className={classes.formInputFields}
          id="mobile"
          type="mobile"
          name="mobile"
          label="Enter your Mobile Number"
          variant="standard"
          onChange={handleChange}
          error={helperTextMobile === "" ? false : true}
          helperText={helperTextMobile}
        />
        <Button
          disabled={enabled}
          onClick={submitUser}
          className={classes.buttonShow}
        >
          Submit
        </Button>
        <Link
          className={classes.alreadyUser}
          to={{
            pathname: "/",
          }}
        >
          {" "}
          Already an User?
        </Link>
      </Box>
    </div>
  );
}

export default NewUser;
