import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LOGIN } from "../constants/constants.service";
import ErrorPic from "../pics/old_lady.jpg";
import "../styles/ErrorPage.css";

class Error extends Component {
  render() {
    return (
      <div>
        <div className="error-wrapper">
          <img className="error-img" alt="Old lady with a mop" src={ErrorPic} />
          {/* <h2>Not found</h2> */}
          <Link className="home-link" to={LOGIN}>
            Go to Home
          </Link>
        </div>
      </div>
    );
  }
}

export default Error;
