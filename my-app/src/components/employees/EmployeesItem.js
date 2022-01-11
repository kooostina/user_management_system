import React, { Component } from "react";

class EmployeesItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: props?.item,
    };
  }

  render() {
    const { item } = this.state;

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
