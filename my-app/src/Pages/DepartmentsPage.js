import React, { Component } from "react";
import DepartmentsService from "../services/departments.service";
import DepartmentsList from "../components/departments/DepartmentsList";

class DepartmentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  initData() {
    DepartmentsService.getDepartments()
      .then((result) => {
        console.log(result);

        this.setState({
          isLoaded: true,
          items: result.departments,
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
        <DepartmentsList items={items}></DepartmentsList>
      ) : (
        <div>No departments yet</div>
      );
    }
  }
  // clickHandler() {
  //   console.log("Clicked!");
  //   <Link href="./employees"></Link>;
  // }

  // render() {
  //   return (
  //     <div>
  //       <div>
  //         <button onClick={this.clickHandler}>See all employees</button>
  //       </div>
  //     </div>
  //   );
  // }
}

export default DepartmentsPage;
