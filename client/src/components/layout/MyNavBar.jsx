import jwt from "jsonwebtoken";
import React from "react";
import { Link } from "react-router-dom";

const MyNavBar = () => {
  const isLoggedIn = Boolean(localStorage.getItem("token"));
  let user = null;
  if (isLoggedIn) user = jwt.decode(localStorage.getItem("token"));
  console.log(user);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar w/ text
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {isLoggedIn && (
            <li className="nav-item active">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
          )}
          {!isLoggedIn && (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
          {!isLoggedIn && (
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li className="nav-item">
              <button
                className="nav-link"
                to="/logout"
                onClick={(e) => {
                  localStorage.setItem("token", "");
                  window.location.href = "/";
                }}
              >
                Logout {user.name}
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default MyNavBar;
