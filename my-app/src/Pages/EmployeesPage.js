import React, { Component } from "react";
import EmployeesList from "../components/employees/EmployeesList";
import Loader from "../components/loader/Loader";
import EmployeesService from "../services/employees.service";
import { LoaderContext } from "../contexts/LoaderContext";

const employeesService = new EmployeesService();

class EmployeesPage extends Component {
  static contextType = LoaderContext;
  state = {
    error: null,
    // isLoaded: false,
    items: [],
  };

  initData() {
    this.context.handleToggleLoader();
    const departmentId = this.props.departmentId;

    employeesService
      .getEmployeesByDepartmentId(departmentId)
      .then((result) => {
        this.setState({
          // isLoaded: true,
          items: result,
        });
      })
      .catch((error) => {
        this.setState({
          // isLoaded: true,
          error,
        });
      })
      .finally(this.context.handleToggleLoader);
  }

  componentDidMount() {
    this.initData();
  }

  render() {
    const { error, /*isLoaded,*/ items } = this.state;

    if (error) {
      // popup & redirect to login 401 / 403
      return <div>Error: {error.message}</div>;
    }

    if (!this.context.isLoaded && !this.state.items.length) {
      return <div>No created departments yet</div>;
    }

    return <EmployeesList items={items} />;
  }
}

export default EmployeesPage;
