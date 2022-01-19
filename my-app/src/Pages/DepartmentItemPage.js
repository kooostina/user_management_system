import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import EmployeesPage from "./EmployeesPage";

class DepartmentItemPage extends Component {
  render() {
    const departmentId = this.props.match.params.departmentId;

    return <EmployeesPage departmentId={departmentId}></EmployeesPage>;
  }
}

export default withRouter(DepartmentItemPage);
