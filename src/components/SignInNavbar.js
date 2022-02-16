import React from "react";
import { Link } from "react-router-dom";
import "./SignInNavbarStyles.css";

function Navbar() {
  return (
    <div className="navbar_container">
      <Link to="/">
        <img
          src={require("../assets/logo.png")}
          style={{ width: 134, height: 36 }}
        />
      </Link>
    </div>
  );
}

export default Navbar;
