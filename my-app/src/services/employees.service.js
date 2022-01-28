import { getBaseUrl } from "../constants/constants.service";
import { getToken } from "./auth.service";

const baseUrl = getBaseUrl();
const options = {
  method: "GET",
  headers: {
    authorization: getToken(),
  },
};

export default class EmployeesService {
  getEmployees = () => {
    return fetch(`${baseUrl}/employees`, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        return res;
      })
      .then((res) => res.json())
      .then((data) => data?.employees || []);
  };

  getEmployeesByDepartmentId = (departmentId) => {
    return fetch(`${baseUrl}/departments/${departmentId}/employees`, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        return res;
      })
      .then((res) => res.json())
      .then((data) => data?.employeeByDepartmentId || []);
  };
}
