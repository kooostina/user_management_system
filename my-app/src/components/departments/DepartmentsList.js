import React, { Component } from "react";
import DepartmentsItem from "./DepartmentsItem";

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
          <DepartmentsItem item={item} key={item.id || idx}></DepartmentsItem>
        ))}
      </ul>
    );
  }
}

export default DepartmentsList;
