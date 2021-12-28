import "./App.css";
import React, { Component } from "react";
import LogIn from "./Pages/LogIn";
import Employees from "./Pages/Employees";
import Departments from "./Pages/Departments";
import Error from "./Pages/Error";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <h2>User Management System</h2>
          </div>

          <Switch>
            <Route path="/" exact component={LogIn} />
            <Route path="/departments" component={Departments} />
            <Route path="/employees" component={Employees} />
            <Route path="/error" component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
