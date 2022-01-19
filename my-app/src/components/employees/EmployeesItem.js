import React, { Component } from "react";

class EmployeesItem extends Component {
  render() {
    return (
      <li className="">
        <h2 className="">{this.props.item?.username}</h2>
        <p className="">{this.props.item?.email}</p>
        <button className="">Delete</button>
        <button className="">Edit</button>
      </li>
    );
  }
}

export default EmployeesItem;
