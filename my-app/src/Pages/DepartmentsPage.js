import React, { Component } from "react";
import DepartmentsService from "../services/departments.service";
import DepartmentsList from "../components/departments/departments_list/DepartmentsList";
import Loader from "../components/loader/Loader";

const departmentsService = new DepartmentsService();

class DepartmentsPage extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  };

  initData() {
    departmentsService
      .getDepartments()
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
      <DepartmentsList items={items}></DepartmentsList>
    ) : (
      <div>No created departments yet</div>
    );
  }
}

export default DepartmentsPage;
