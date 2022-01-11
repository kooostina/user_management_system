import React, { Component } from "react";
import EmployeesItem from "./EmployeesItem";

class EmployeesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props?.items || [],
    };
  }

  render() {
    const { items } = this.state;

    return (
      <ul>
        {items.map((item, idx) => (
          <EmployeesItem item={item} key={item.id || idx}></EmployeesItem>
        ))}
      </ul>
    );
  }
}

export default EmployeesList;
