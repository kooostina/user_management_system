import React, { Component } from "react";
import { LOGIN, DEPARTMENTS } from "../../constants/constants.service";
import { Link } from "react-router-dom";
import "../../styles/Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="p-4 navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-4">
          <div class="container-md">
            <div className="d-flex">
              <Link to={DEPARTMENTS} className="logo me-4">
                User Management System
              </Link>
            </div>
            <Link to={LOGIN} className="login-link">
              Login
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
