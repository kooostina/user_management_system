import Constants from "../constants/constants.service";
import { getToken } from "./auth.service";
import { Component } from "react";

const baseUrl = Constants.getBaseUrl();
const options = {
  method: "GET",
  headers: {
    authorization: getToken(),
  },
};

export default class DepartmentsService extends Component {
  getDepartments = () => {
    return fetch(`${baseUrl}${Constants.DEPARTMENTS}`, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }

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
