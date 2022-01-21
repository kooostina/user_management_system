import "./App.css";
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ProtectedRoute from "./Pages/ProtectedRoute";
import { publicRoutes, protectedRoutes } from "./constants/routes";
import LoaderContextProvider from "./contexts/LoaderContext";

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

          <LoaderContextProvider>
            <Switch>{[...routes]}/</Switch>
          </LoaderContextProvider>
        </div>
      </Router>
    );
  }
}

export default App;
