import React, { Component } from "react";
import DepartmentsService from "../services/departments.service";
import { withRouter, Link } from "react-router-dom";
import EmployeesList from "../components/employees/EmployeesList";
import employeesService from "../services/employees.service";
import EmployeesPage from "./EmployeesPage";

class DepartmentItemPage extends Component {
  render() {
    const departmentId = this.props.match.params.departmentId;

    return <EmployeesPage departmentId={departmentId}></EmployeesPage>;
  }
}

export default withRouter(DepartmentItemPage);
