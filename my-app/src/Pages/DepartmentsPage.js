import React, { Component } from "react";
import DepartmentsService from "../services/departments.service";
import DepartmentsList from "../components/departments/departments_list/DepartmentsList";
import { LoaderContext } from "../contexts/LoaderContext";
import withAbsenceItems from "../hocs/withAbsenceItems";

const departmentsService = new DepartmentsService();

class DepartmentsPage extends Component {
  static contextType = LoaderContext;

  state = {
    // error: null,
    items: [],
  };

  initData() {
    this.context.handleToggleLoader();

    departmentsService
      .getDepartments()
      .then((result) => {
        if (!!result.length) {
          this.setState({ items: result });
        } else {
          console.log(this.props.setMessage);
          this.props.setMessage("departments");
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
    console.log(this.context);
    const { items } = this.state;

    // if (!this.context.isLoaded && !this.state.items.length) {
    //   return <div>No created departments yet</div>;
    // }

    return <DepartmentsList items={items} />;
  }
}

export default withAbsenceItems(DepartmentsPage);
