// import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ProtectedRoute from "./Pages/ProtectedRoute";
import { publicRoutes, protectedRoutes } from "./constants/routes";
import LoaderContextProvider from "./contexts/LoaderContext";
import Header from "./components/header/Header";

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
        <Header />
        <main className="container">
          <LoaderContextProvider>
            <Switch>{[...routes]}/</Switch>
          </LoaderContextProvider>
        </main>
      </Router>
    );
  }
}

export default App;
