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

  return fetch(`${baseUrl}/departments`, options).then((res) => {
    console.log(res);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });

  // return Promise.resolve({
  //   departments: [
  //     { name: "aaaa", description: "bbbb" },
  //     { name: "bbb", description: "ddd" },
  //   ],
  // });
};

export default Object.assign(
  {},
  {
    getDepartments,
  }
);
