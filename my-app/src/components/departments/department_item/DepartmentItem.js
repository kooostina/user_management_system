import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { generateEmployeesUrl } from "../../../constants/constants.service";
import "../../../styles/CommonStyles.css";

class DepartmentItem extends Component {
  render() {
    const { url } = this.props.match;
    const { item } = this.props;

    return (
      <li className="card-item shadow p-3 mb-4 bg-body rounded">
        <img className="card-avatar" alt="Avatar"></img>
        <h2 className="card-name">{item?.name}</h2>
        <p className="card-description">{item?.description}</p>
        <div className="btn-group">
          <button className="btn btn-outline-success">Edit</button>
          <button className="btn btn-outline-danger">Delete</button>
          <Link
            to={generateEmployeesUrl(url, item?.id)}
            className="btn btn-outline-secondary"
          >
            Employees
          </Link>
        </div>
      </li>
    );
  }
}

export default withRouter(DepartmentItem);
