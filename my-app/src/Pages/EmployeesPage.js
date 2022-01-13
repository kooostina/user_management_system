import React, { Component } from "react";
import EmployeesService from "../services/employees.service";
import EmployeesList from "../components/employees/EmployeesList";

class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  initData() {
    const departmentId = this.props.departmentId;

    EmployeesService.getEmployeesByDepartmentId(departmentId)
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
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return items?.length ? (
        <EmployeesList items={items}></EmployeesList>
      ) : (
        <div>No created departments yet</div>
      );
    }
  }
}

export default Employees;
