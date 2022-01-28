import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LOGIN } from "../constants/constants.service";

class Error extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>404 Not Found</h2>
          <Link to={LOGIN}>Go to Home</Link>
        </div>
      </div>
    );
  }
}

export default Error;
