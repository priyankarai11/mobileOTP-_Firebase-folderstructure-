
import firebase from "./firebase";
import { useNavigate } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";

function userAuth() {
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const configureCaptcha = () => {
   console.log("called")
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
  
   const handleChange = (e) => {
     setNumber(e.target.value);
   };

  
  return (
    <LoginPage
      configureCaptcha={configureCaptcha}
      number={number}
      handleChange={handleChange}
    />
  );

}

export default userAuth; 
    

    


