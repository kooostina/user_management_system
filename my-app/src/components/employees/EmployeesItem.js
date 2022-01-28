import React, { Component } from "react";

class EmployeesItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <li className="">
        <h2 className="">{item?.username}</h2>
        <p className="">{item?.email}</p>
        <button className="">Delete</button>
        <button className="">Edit</button>
      </li>
    );
  }
}

export default EmployeesItem;
