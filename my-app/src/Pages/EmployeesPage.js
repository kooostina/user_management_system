import React, { Component } from "react";
import EmployeesList from "../components/employees/EmployeesList";
import EmployeesService from "../services/employees.service";
import { LoaderContext } from "../contexts/LoaderContext";
import withAbsenceItems from "../hocs/withAbsenceItems";

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
        if (!!result.length) {
          this.setState({ items: result });
        } else {
          this.props.setMessage("employees");
        }
      })
      .catch((error) => {
        this.context.setError(error);
      })
      .finally(this.context.handleToggleLoader);
  }

  componentDidMount() {
    this.initData();
  }

  render() {
    const { items } = this.state;

    return <EmployeesList items={items} />;
  }
}

export default withAbsenceItems(EmployeesPage);
