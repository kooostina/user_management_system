import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthorized } from "../services/auth.service";
import { LOGIN } from "../constants/constants.service";

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthorized() ? (
          <Component {...props} />
        ) : (
          <Redirect to={LOGIN} />
        );
      }}
    />
  );
}

export default ProtectedRoute;
