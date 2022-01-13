import Constants from "../constants/constants.service";
import authService from "./auth.service";
import departmentsService from "./departments.service";

const baseUrl = Constants.getBaseUrl();

const getEmployees = () => {
  const options = {
    method: "GET",
    headers: {
      authorization: authService.getToken(),
    },
  };

  return fetch(`${baseUrl}/employees`, options).then(async (res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data = await res.json();
    return data?.employees || [];
  });
};

const getEmployeesByDepartmentId = (departmentId) => {
  const options = {
    method: "GET",
    headers: {
      authorization: authService.getToken(),
    },
  };

  return fetch(
    `${baseUrl}/departments/${departmentId}/employees`,
    options
  ).then(async (res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data = await res.json();
    return data?.employeeByDepartmentId || [];
  });

  // return departmentsService.getDepartmentById(departmentId).then(department) => {
  // return department.employees;
};

// fake request to get all employees for specific departmentId
// return getEmployees().then((data) => {
//   return data.filter((employee) => {
//     return Number(employee.username.replace("Employee", "")) <= 7;
//   });
// });

export default Object.assign(
  {},
  {
    getEmployees,
    getEmployeesByDepartmentId,
  }
);
