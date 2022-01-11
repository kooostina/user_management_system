import React, { Component } from "react";
import "../departments/DepartmentItem.css";
import { withRouter, Link } from "react-router-dom";

class DepartmentsItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: props?.item,
    };
  }

  showEmployees() {
    console.log("Employees button clicked!");
  }

  render() {
    const { item } = this.state;
    const { url } = this.props.match;

    return (
      <li className="department-item">
        <h2 className="department-name">{item?.name}</h2>
        <p className="department-description">{item?.description}</p>
        <button className="department-button">Delete</button>
        <button className="department-button">Edit</button>
        <Link to={`${url}/${item?.id}/employees`} className="department-button">
          Employees
        </Link>
      </li>
    );
  }
}

export default withRouter(DepartmentsItem);
