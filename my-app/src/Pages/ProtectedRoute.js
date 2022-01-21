import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthorized } from "../services/auth.service";
import constantsService from "../constants/constants.service";

function ProtectedRoute({ component: Component, ...rest }) {
  // console.log(isAuthorized());
  // console.log(Component);
  // console.log(rest);
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthorized() ? (
          <Component {...props} />
        ) : (
          <Redirect to={constantsService.LOGIN} />
        );
      }}
    />
  );
}

export default ProtectedRoute;
