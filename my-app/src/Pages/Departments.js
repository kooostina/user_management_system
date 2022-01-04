import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("localhost:3000/api/v1/departments")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} {item.description}
            </li>
          ))}
        </ul>
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

export default Departments;
