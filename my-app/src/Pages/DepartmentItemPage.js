import React, { Component } from "react";
import DepartmentsService from "../services/departments.service";
import { withRouter, Link } from "react-router-dom";
import EmployeesPage from "./EmployeesPage";

class DepartmentItemPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      item: null,
    };
  }

  initData() {
    const { departmentId } = this.props?.match?.params;

    DepartmentsService.getDepartmentById(departmentId)
      .then((result) => {
        this.setState({
          isLoaded: true,
          item: result,
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
    const { error, isLoaded, item } = this.state;

    return (
      <React.Fragment>
        <div>
          <Link to="/">Back to Home</Link>
        </div>
        {error ? (
          <div>Error: {error.message}</div>
        ) : !isLoaded ? (
          <div>Loading...</div>
        ) : (
          <EmployeesPage departmentId={item.id}></EmployeesPage>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(DepartmentItemPage);
