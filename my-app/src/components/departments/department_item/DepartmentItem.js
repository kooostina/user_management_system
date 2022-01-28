import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { generateEmployeesUrl } from "../../../constants/constants.service";

class DepartmentItem extends Component {
  render() {
    const { url } = this.props.match;
    const { item } = this.props;

    return (
      <li className="department-item">
        <h2 className="department-name">{item?.name}</h2>
        <p className="department-description">{item?.description}</p>
        <button className="department-button">Delete</button>
        <button className="department-button">Edit</button>
        <Link
          to={generateEmployeesUrl(url, item?.id)}
          className="department-button"
        >
          Employees
        </Link>
      </li>
    );
  }
}

export default withRouter(DepartmentItem);
