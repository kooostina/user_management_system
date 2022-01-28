import React, { Component } from "react";
import Loader from "../components/loader/Loader";
import ErrorPage from "../Pages/ErrorPage";

export const LoaderContext = React.createContext();

export default class LoaderContextProvider extends Component {
  state = {
    isLoaded: false,
    error: null,
  };

  handleToggleLoader = () => {
    this.setState((prevState) => ({
      ...prevState,
      isLoaded: !prevState.isLoaded,
    }));
  };

  setError = (error) => {
    this.setState((prevState) => ({
      ...prevState,
      error: error.message,
    }));
  };

  render() {
    return (
      <LoaderContext.Provider
        value={{
          isLoaded: this.state.isLoaded,
          handleToggleLoader: this.handleToggleLoader,
          setError: this.setError,
        }}
      >
        {this.state.error && <ErrorPage />}
        {this.state.isLoaded && <Loader />}
        {this.props.children}
      </LoaderContext.Provider>
    );
  }
}

// export default createContext({ loading: true });

// import React from "react";
// import { createContext, useEffect, useState } from "react";

// export const AppContext = React.createContext({});

// export const LoaderContextProvider = ({ children }) => {
//   const [loading, setLoading] = useState(true);

//   const value = {
//     loading,
//     setLoading,
//   };

//   return (
//     <AppContext.Provider value={value}>{children}</AppContext.Provider>
//   );
// };
