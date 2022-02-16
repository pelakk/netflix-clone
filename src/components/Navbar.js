import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";

function Navbar() {
  const logged = useSelector((state) => state.login);

  return (
    <div className="navbar_container">
      <Link to="/">
        <img
          src={require("../assets/logo.png")}
          style={{ width: 134, height: 36 }}
        />
      </Link>
      {logged ? (
        <img
          src={require("../assets/avatar.png")}
          style={{ width: 34, height: 34 }}
        />
      ) : (
        <Link to="/signin">
          <button className="navbar_button">Sign in</button>
        </Link>
      )}
    </div>
  );
}

export default Navbar;
