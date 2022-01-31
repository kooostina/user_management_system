import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { login } from "../../services/auth.service";
import CookieService from "../../services/cookie.service";
import { DEPARTMENTS } from "../../constants/constants.service";
import "../../styles/LogInComponent.css";

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
      <div className="col-md-6 offset-md-3">
        <div className="text-center">
          <h1 className="text-secondary">Welcome</h1>
          <p>Log in by entering the information below</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group mb-3">
            {/* <label htmlFor="username">Username</label> */}
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              value={username}
              className="form-control"
              onChange={this.onChangeInput} //make a separate function
            />
          </div>
          <div className="form-group mb-3">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              value={password}
              className="form-control"
              onChange={this.onChangeInput}
            />
          </div>
          <div>
            <button type="submit" className="btn login-button px-5 mb-5 w-100">
              Get started
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LogInComponent);
