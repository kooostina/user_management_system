import React, { Component } from "react";
import { Link } from "react-router-dom";

class Error extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>404 Not Found</h2>
          <Link to="/departments">Go to Home</Link>
        </div>
      </div>
    );
  }
}

export default Error;
