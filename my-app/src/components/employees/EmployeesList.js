import React, { Component } from "react";
import EmployeesItem from "./EmployeesItem";

class EmployeesList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, idx) => (
          <EmployeesItem item={item} key={item.id || idx} />
        ))}
      </ul>
    );
  }
}

export default EmployeesList;
