import React, { Component } from "react";
import Loader from "../components/loader/Loader";

export const LoaderContext = React.createContext();

export default class LoaderContextProvider extends Component {
  state = {
    isLoaded: false,
    error: "",
  };

  setLoaded = () => {
    this.setState({ isLoaded: true });
  };

  setLoading = () => {
    this.setState({ isLoaded: false });
  };

  handleToggleLoader = () => {
    this.setState((prevState) => ({
      ...prevState,
      isLoaded: !prevState.isLoaded,
    }));
  };

  render() {
    return (
      <LoaderContext.Provider
        value={{
          isLoaded: this.state.isLoaded,
          setLoaded: () => this.setLoaded(),
          setLoading: () => this.setLoading(),
          handleToggleLoader: this.handleToggleLoader,
        }}
      >
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
