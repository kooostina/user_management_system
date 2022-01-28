import React, { Component } from "react";

const withAbsenceItems = (WrappedComponent) => {
  class HOC extends Component {
    state = {
      message: "",
    };

    setMessage = (message) => {
      console.log(message);
      this.setState((prevState) => ({
        ...prevState,
        message: `There are no created ${message} yet`,
      }));
    };

    render() {
      return (
        <div>
          {this.state.message && <div>{this.state.message}</div>}
          <WrappedComponent setMessage={this.setMessage} {...this.props} />
        </div>
      );
    }
  }
  return HOC;
};

export default withAbsenceItems;
