import React, { Component } from "react";

class DepartmentsItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: props?.item,
    };
  }

  render() {
    const { item } = this.state;

    return (
      <li>
        {item?.name} {item?.description}
      </li>
    );
  }
}

export default DepartmentsItem;
