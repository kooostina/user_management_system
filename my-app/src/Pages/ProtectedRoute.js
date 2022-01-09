import React from "react";
import { Route, Redirect } from "react-router-dom";
import authService from "../services/auth.service";

function ProtectedRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        return authService.isAuthorized() ? children : <Redirect to="/login" />;
      }}
    />
  );
}

export default ProtectedRoute;
