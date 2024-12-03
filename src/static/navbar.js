import { Link } from "react-router-dom";
import React from "react";
import { jwtDecode } from "jwt-decode";
import { logout } from "../shared/auth/authService";
import { useEffect } from "react";

function navbar() {
  const isAuthenticated = localStorage.getItem("token") ? true : false;
  const user = isAuthenticated ? jwtDecode(localStorage.getItem("token")) : null;
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        logout();
      }
    }
  }, [location]);

  return (
    <nav class="navbar navbar-expand-lg bg-body-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/categories">
                Categories
              </Link>
            </li>
          
          </ul>
          <ul class="navbar-nav ms-auto ">
            <li className="nav-item">

              {isAuthenticated ? (
               
              <span class="nav-link d-flex align-items-center"> <Link className="nav-link" to="/userProfile">{user.unique_name}</Link><button className="btn btn-dark ms-2 text-white" onClick={logout}>Logout</button></span>
              ): 
              (
                <Link className="nav-link" to="/loginRegister">
                  Login | Register
                </Link>
              )}

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
