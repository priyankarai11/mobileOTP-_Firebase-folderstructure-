/** @format */

// import React,{useEffect, useState} from 'react';
// import { Box, Button, TextField } from "@material-ui/core";
// import { useNavigate,Link } from 'react-router-dom';
// import { db } from '../LoginPage/firebase';
// import GirlImage from "../../Assets/Images/girl.svg";
// import { EMAIL_ERROR,EMAIL_REGEX } from './constant';
// import {useStyle} from "./style"

// function NewUser() {

//   const navigate = useNavigate();
//   const classes = useStyle();
//   const [Enabled, setEnabled]=useState(true)
//   const [helperTextName, setHelperTextName] = useState("");
//   const [helperTextMobile, setHelperTextMobile] = useState("");
//   const [helperTextEmail, setHelperTextEmail] = useState("");
//   const [input, setInput] = useState({
//         role:"User",
//         name: "",
//         mobile: "",
//         email:""
//   })

//   const submitUser = async(e) => {
//     e.preventDefault();
//     const  res  = await db.collection("User").add(input);
//     console.log(res)
//     if(res) navigate('/')
//   }

//     const handleChange = (e) => {
//          e.preventDefault();
//         const { name, value } = e.target;
//         switch (name) {
//           case "name":
//             if (value.length > 0) {
//               setHelperTextName("");
//             } else {
//               setHelperTextName("Please Enter valid name");
//             }
//             break;
//           case "mobile":
//             if (value.length >0 && value.length===10) {
//               setHelperTextMobile("");
//             } else {
//               setHelperTextMobile("Please Enter valid mobile number");
//             }
//             break;
//           case "email":
//             if (EMAIL_REGEX.test(value) && value.length > 0) {
//               setHelperTextEmail("");
//             } else {
//               setHelperTextEmail(EMAIL_ERROR);
//             }
//             break;
//           default:
//             break;
//       }
//         setInput({ ...input, [name]: value });
//   }

//   const disableButton = () => {
//     const { name, mobile, email } = input
//     if (name === '' || mobile === '' || email === '')
//     {
//       setEnabled(true)
//     }
//     else {
//       setEnabled(false)
//     }
//   }

//   useEffect(() => {
//     disableButton();
//   });

//     return (
//       <div className={classes.centered}>
//         <Box className={classes.cardDisplay}>
//           <span className={classes.loginHeading}>New User</span>
//           <img className={classes.girlImage} src={GirlImage} alt="girlImage" />
//           <TextField
//             value={input.name}
//             className={classes.formInputFields}
//             id="name"
//             type="name"
//             name="name"
//             label="Enter your name"
//             variant="standard"
//             onChange={handleChange}
//             error={helperTextName === "" ? false : true}
//             helperText={helperTextName}
//           />

//           <TextField
//             value={input.email}
//             className={classes.formInputFields}
//             id="email"
//             type="email"
//             name="email"
//             label="Enter your Email Address"
//             variant="standard"
//             onChange={handleChange}
//             error={helperTextEmail === "" ? false : true}
//             helperText={helperTextEmail}
//           />

//           <TextField
//             value={input.mobile}
//             className={classes.formInputFields}
//             id="mobile"
//             type="mobile"
//             name="mobile"
//             label="Enter your Mobile Number"
//             variant="standard"
//             onChange={handleChange}
//             error={helperTextMobile === "" ? false : true}
//             helperText={helperTextMobile}
//           />
//           <Button
//             disabled={Enabled}
//             onClick={submitUser}
//             className={classes.buttonShow}
//           >
//             Submit
//           </Button>
//           <Link
//             className={classes.alreadyUser}
//             to={{
//               pathname: "/",
//             }}
//           >
//             {" "}
//            Already an User?
//           </Link>
//         </Box>
//       </div>
//     );
// }

// export default NewUser;
