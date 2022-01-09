import "./App.css";
import React, { Component } from "react";
import LoginPage from "./Pages/LoginPage";
import EmployeesPage from "./Pages/EmployeesPage";
import DepartmentsPage from "./Pages/DepartmentsPage";
import ErrorPage from "./Pages/ErrorPage";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import ProtectedRoute from "./Pages/ProtectedRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <h2>User Management System</h2>
          </div>

          <Switch>
            {/* <Route path="/" exact component={MainPage} /> */}
            <Route path="/login" exact component={LoginPage} />
            <ProtectedRoute path="/departments">
              <DepartmentsPage></DepartmentsPage>
            </ProtectedRoute>
            <ProtectedRoute
              path="/employees"
              component={EmployeesPage}
            ></ProtectedRoute>
            <Route path="/error" component={ErrorPage} />
            <Route exact path="*" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
