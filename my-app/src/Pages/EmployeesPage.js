import React, { Component } from "react";
import EmployeesList from "../components/employees/EmployeesList";
import Loader from "../components/loader/Loader";
import EmployeesService from "../services/employees.service";

const employeesService = new EmployeesService();

class EmployeesPage extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  };

  initData() {
    const departmentId = this.props.departmentId;

    employeesService
      .getEmployeesByDepartmentId(departmentId)
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result,
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }

  componentDidMount() {
    this.initData();
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      // popup & redirect to login 401 / 403
      return <div>Error: {error.message}</div>;
    }

    if (!isLoaded) {
      return <Loader />;
    }
    return !!items?.length ? (
      <EmployeesList items={items} />
    ) : (
      <div>No created departments yet</div>
    );
  }
}

export default EmployeesPage;
