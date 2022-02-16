import React, { useRef } from "react";
import SignInNavbar from "../components/SignInNavbar";
import "./SignInStyles.css";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  initializeApp(firebaseConfig);
  const auth = getAuth();

  let navigate = useNavigate();

  const register = () => {
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  return (
    <div className="signin_container">
      <SignInNavbar />
      <div className="signin_main">
        <div className="signin_formContainer">
          <h1>Sign In</h1>
          <div className="signin_inputContainer">
            <p>Email address</p>
            <input type="text" ref={emailRef} />
          </div>
          <div className="signin_inputContainer">
            <p>Password</p>
            <input type="text" ref={passwordRef} />
          </div>
          <button onClick={register}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
