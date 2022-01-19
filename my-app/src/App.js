import "./App.css";
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ProtectedRoute from "./Pages/ProtectedRoute";
import DepartmentsPage from "./Pages/DepartmentsPage";
import ErrorPage from "./Pages/ErrorPage";
import DepartmentItemPage from "./Pages/DepartmentItemPage";
import LogInPage from "./Pages/LoginPage";
import { publicRoutes, protectedRoutes } from "./constants/routes";

class App extends Component {
  render() {
    const routes = [
      ...protectedRoutes.map((route, i) => {
        return <ProtectedRoute {...route} key={i} />;
      }),
      ...publicRoutes.map((route, i) => {
        return <Route {...route} key={i} />;
      }),
    ];

    return (
      <Router>
        <div>
          <div>
            <h2>User Management System</h2>
          </div>

          <Switch>{[...routes]}/</Switch>
        </div>
      </Router>
    );
  }
}

export default App;
