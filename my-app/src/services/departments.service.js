import { DEPARTMENTS, getBaseUrl } from "../constants/constants.service";
import { getToken } from "./auth.service";

const baseUrl = getBaseUrl();
const options = {
  method: "GET",
  headers: {
    authorization: getToken(),
  },
};

export default class DepartmentsService {
  getDepartments = () => {
    return fetch(`${baseUrl}${DEPARTMENTS}`, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        // throw new Error(res.statusText);
        return res;
      })
      .then((res) => res.json())
      .then((data) => data?.departments || []);
  };

  getDepartmentById = (id) => {
    return this.getDepartments().then((data) => {
      return data.find((department) => department?.id === id);
    });
  };
}
