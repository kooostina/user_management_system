import React, { Component } from "react";

class MainPage extends Component {
  init() {
    // check isAuthorized
    // if Yes -- redirect to departments
    // if NO -- redirect to Login
  }

  componentDidMount() {
    this.init();
  }

  render() {
    return <div>Main Page</div>;
  }
}

export default MainPage;
