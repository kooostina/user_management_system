import { Component } from "react";
import "./Loader.css";

export default class Loader extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="overlay__inner">
          <div className="overlay__content">
            <span className="spinner"></span>
          </div>
        </div>
      </div>
    );

    // <div className="loader"></div>;
  }
}
