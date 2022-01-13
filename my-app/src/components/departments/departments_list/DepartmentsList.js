import React, { Component } from "react";
import DepartmentItem from "../department_item/DepartmentItem";

class DepartmentsList extends Component {
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
          <DepartmentItem item={item} key={item.id || idx}></DepartmentItem>
        ))}
      </ul>
    );
  }
}

export default DepartmentsList;
