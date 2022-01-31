import { Component } from "react";
import "../../styles/Search.css";

export default class Search extends Component {
  render() {
    return (
      <form class="d-flex">
        {/* <i className="fas fa-search" style={{ fontSize: 24 }}></i> */}
        <input
          className="form-control me-2"
          type="search"
          placeholder="Type to search..."
          aria-label="Search"
        />
      </form>
    );
  }
}
