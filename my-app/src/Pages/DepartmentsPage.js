import React, { Component } from "react";
import DepartmentsService from "../services/departments.service";
import DepartmentsList from "../components/departments/departments_list/DepartmentsList";
import { LoaderContext } from "../contexts/LoaderContext";

const departmentsService = new DepartmentsService();

class DepartmentsPage extends Component {
  static contextType = LoaderContext;

  state = {
    error: null,
    items: [],
  };

  initData() {
    this.context.handleToggleLoader();

    departmentsService
      .getDepartments()
      .then((result) => {
        this.setState({ items: result });
      })
      .catch((error) => {
        this.setState({ error });
      })
      .finally(this.context.handleToggleLoader);
  }

  componentDidMount() {
    this.initData();
  }

  render() {
    const { error, items } = this.state;

    if (error) {
      // popup & redirect to login 401 / 403
      return <div>Error: {error.message}</div>;
    }

    if (!this.context.isLoaded && !this.state.items.length) {
      return <div>No created departments yet</div>;
    }

    return <DepartmentsList items={items} />;
  }
}

export default DepartmentsPage;
