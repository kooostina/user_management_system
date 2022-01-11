import "./App.css";
import React, { Component } from "react";
import LoginPage from "./Pages/LoginPage";
import EmployeesPage from "./Pages/EmployeesPage";
import DepartmentItemPage from "./Pages/DepartmentItemPage";
import DepartmentsPage from "./Pages/DepartmentsPage";
import ErrorPage from "./Pages/ErrorPage";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
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

            <ProtectedRoute exact path="/departments">
              <DepartmentsPage></DepartmentsPage>
            </ProtectedRoute>

            <ProtectedRoute exact path="/departments/:departmentId/employees">
              <DepartmentItemPage></DepartmentItemPage>
            </ProtectedRoute>

            {/* <ProtectedRoute
              exact
              path="/departments/:departmentId/employees"
              component={EmployeesPage}
            ></ProtectedRoute> */}
            <Route path="/error" component={ErrorPage} />
            <Route exact path="*" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
