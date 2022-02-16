import React, { useRef } from "react";
import SignInNavbar from "../components/SignInNavbar";
import "./SignInStyles.css";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from ".././state/index";

function SignIn() {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  initializeApp(firebaseConfig);
  const auth = getAuth();

  const dispatch = useDispatch();
  const { login, logout } = bindActionCreators(actionCreators, dispatch);

  let navigate = useNavigate();

  const _login = () => {
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(() => {
        login();
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
          <button onClick={_login}>Sign In</button>
          <p>
            New to Netflix?
            <span>
              {" "}
              <Link to="/signup"> Sign up now. </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
