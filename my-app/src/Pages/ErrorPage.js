import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LOGIN } from "../constants/constants.service";

class Error extends Component {
  render() {
    return (
      <div>
        <div>
          <img alt="Old lady with a mop" src="old_lady.jpg"></img>
          <h2>Not found</h2>
          <Link to={LOGIN}>Go to Home</Link>
        </div>
      </div>
    );
  }
}

export default Error;
