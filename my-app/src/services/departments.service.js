import Constants from "../constants/constants.service";
import authService from "./auth.service";

const baseUrl = Constants.getBaseUrl();

const getDepartments = () => {
  const options = {
    method: "GET",
    headers: {
      authorization: authService.getToken(),
    },
  };

  return fetch(`${baseUrl}/departments`, options).then(async (res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data = await res.json();
    return data?.departments || [];
  });
};

const getDepartmentById = (id) => {
  // fake request for one item
  return getDepartments().then((data) => {
    return data.find((department) => department?.id === id);
  });
};

export default Object.assign(
  {},
  {
    getDepartments,
    getDepartmentById,
  }
);
