import React, { Component } from "react";
import EmployeesList from "../components/employees/EmployeesList";
import EmployeesService from "../services/employees.service";
import { LoaderContext } from "../contexts/LoaderContext";

const employeesService = new EmployeesService();

class EmployeesPage extends Component {
  static contextType = LoaderContext;
  state = {
    items: [],
  };

  initData() {
    this.context.handleToggleLoader();
    const departmentId = this.props.departmentId;

    employeesService
      .getEmployeesByDepartmentId(departmentId)
      .then((result) => {
        this.setState({
          items: result,
        });
      })
      .catch((error) => {
        // this.context.setError(error);
      })
      .finally(this.context.handleToggleLoader);
  }

  componentDidMount() {
    this.initData();
  }

  render() {
    const { items } = this.state;

    if (!this.context.isLoaded && !this.state.items.length) {
      return <div>No created employees yet</div>;
    }

    return <EmployeesList items={items} />;
  }
}

export default EmployeesPage;
