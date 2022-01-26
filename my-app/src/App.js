// import "./App.css";
import "./App.css";
import "./Style_variables/Variables.css";
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ProtectedRoute from "./Pages/ProtectedRoute";
import { publicRoutes, protectedRoutes } from "./constants/routes";
import LoaderContextProvider from "./contexts/LoaderContext";

const routes = [
  ...protectedRoutes.map((route, i) => {
    return <ProtectedRoute {...route} key={i} />;
  }),
  ...publicRoutes.map((route, i) => {
    return <Route {...route} key={i} />;
  }),
];

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <h2 className="logo">User Management System</h2>
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
