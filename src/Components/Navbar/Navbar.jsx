import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { handleSuccess } from "../../utils/Utils";
import { ToastContainer } from "react-toastify";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/home";
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []); // Dependency array ensures this runs only once

  const handleLogout = (e) => {
    handleSuccess("User Logged Out");
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="nav-main">
      <div className="nav-logo">Logo</div>
      <div className="navigators">
        <ul className="nav-ul">
          {isHomePage ? (
            <>
              <Link
                to="/explore"
                className={`link ${
                  location.pathname === "/explore" ? "active-link" : ""
                }`}
              >
                <li className="nav-li">Explore</li>
              </Link>
              <Link
                to="/help"
                className={`link ${
                  location.pathname === "/help" ? "active-link" : ""
                }`}
              >
                <li className="nav-li">Help</li>
              </Link>
              <Link
                to="/services"
                className={`link ${
                  location.pathname === "/services" ? "active-link" : ""
                }`}
              >
                <li className="nav-li">Services</li>
              </Link>
              <Link
                to="/plans"
                className={`link ${
                  location.pathname === "/plans" ? "active-link" : ""
                }`}
              >
                <li className="nav-li">Plans</li>
              </Link>
              <Link
                to="/profile"
                className={`link ${
                  location.pathname === "/profile" ? "active-link" : ""
                }`}
              >
                <li className="nav-li">Profile</li>
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/home"
                className={`link ${
                  location.pathname === "/home" ? "active-link" : ""
                }`}
              >
                <li className="nav-li">Home</li>
              </Link>
              <Link
                to="/property"
                className={`link ${
                  location.pathname === "/property" ? "active-link" : ""
                }`}
              >
                <li className="nav-li">Properties</li>
              </Link>
              <Link
                to="/create"
                className={`link ${
                  location.pathname === "/create" ? "active-link" : ""
                }`}
              >
                <li className="nav-li">Add Property</li>
              </Link>
              <Link
                to="/documents"
                className={`link ${
                  location.pathname === "/documents" ? "active-link" : ""
                }`}
              >
                <li className="nav-li">Documents</li>
              </Link>
              <Link
                to="/maintainence"
                className={`link ${
                  location.pathname === "/maintainence" ? "active-link" : ""
                }`}
              >
                <li className="nav-li">Maintenance</li>
              </Link>
            </>
          )}
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </ul>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Navbar;
