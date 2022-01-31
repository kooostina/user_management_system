import React, { Component } from "react";

class EmployeesItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <li className="card-item shadow p-3 mb-4 bg-body rounded">
        <h2 className="card-name">{item?.username}</h2>
        <p className="card-description">{item?.email}</p>
        <div className="btn-group">
          <button className="btn btn-outline-success">Edit</button>
          <button className="btn btn-outline-danger">Delete</button>
        </div>
      </li>
    );
  }
}

export default EmployeesItem;
