import React, { Component } from "react";
import DepartmentItem from "../department_item/DepartmentItem";

class DepartmentsList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, idx) => (
          <DepartmentItem item={item} key={item.id || idx} />
        ))}
      </ul>
    );
  }
}

export default DepartmentsList;
