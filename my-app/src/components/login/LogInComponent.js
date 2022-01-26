import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect, withRouter } from "react-router-dom";
import { login } from "../../services/auth.service";
import CookieService from "../../services/cookie.service";
import { DEPARTMENTS } from "../../constants/constants.service";

const cookieService = new CookieService();

class LogInComponent extends Component {
  state = {
    isAuthorized: false,
    error: null,
    isLoaded: false,
    username: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    login({
      username: this.state.username,
      password: this.state.password,
    })
      .then((res) => {
        if (res.USERTOKEN) {
          cookieService.setCookie("token", res.USER_TOKEN);
          this.props.history.push(DEPARTMENTS); // метод редиректа с функции
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  onChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
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
                value={username}
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
                value={password}
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

export default withRouter(LogInComponent);
