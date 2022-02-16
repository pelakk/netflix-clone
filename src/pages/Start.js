import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./StartStyles.css";

function Start() {
  return (
    <div className="start_container">
      <Navbar />
      <div className="start_main">
        <h1 className="start_text">Unlimited movies, TV shows, and more.</h1>
        <h2 className="start_text">Watch anywhere. Cancel anytime.</h2>
        <h3 className="start_text">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="start_form">
          <div className="start_inputContainer">
            <p style={{ color: "#8c8c8c" }}>Email address</p>
            <p>
              <input type="email" width={"100%"} className="start_input" />
            </p>
          </div>
          <Link to="/signup">
            <button className="start_button">Get Started {" >"}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
