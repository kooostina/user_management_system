import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import constantsService from "../../../constants/constants.service";

class DepartmentItem extends Component {
  render() {
    const { url } = this.props.match;

    return (
      <li className="department-item">
        <h2 className="department-name">{this.props.item?.name}</h2>
        <p className="department-description">{this.props.item?.description}</p>
        <button className="department-button">Delete</button>
        <button className="department-button">Edit</button>
        <Link
          to={constantsService.generateEmployeesUrl(url, this.props.item?.id)}
          className="department-button"
        >
          Employees
        </Link>
      </li>
    );
  }
}

export default withRouter(DepartmentItem);
