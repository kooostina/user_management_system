import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import authService from "../../services/auth.service";
import { Redirect } from "react-router-dom";

class LogIn extends Component {
  state = {
    isAuthorized: authService.isAuthorized(), // on init
    error: null,
    isLoaded: false,
    username: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    authService
      .login({
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        this.setState({ isAuthorized: authService.isAuthorized() });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  onChangeInput = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  render() {
    const { isAuthorized } = this.state;
    // = const isAuthorized = this.state.isAuthorized;

    return isAuthorized ? (
      <Redirect to="/departments" />
    ) : (
      <div className="col-md-12 d-flex justify-content-center">
        <div className="card card-container p-4">
          <h1>Please Log In</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="username"
                name="username"
                required
                value={this.state.username}
                className="form-control"
                onChange={this.onChangeInput} //make a separate function
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password"
                name="password"
                required
                value={this.state.password}
                className="form-control"
                onChange={this.onChangeInput}
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary btn-block">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LogIn;
