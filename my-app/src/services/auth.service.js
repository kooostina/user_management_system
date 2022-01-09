import Constants from "../constants/constants.service";
import cookieService from "./cookie.service";

const baseUrl = Constants.getBaseUrl();
const USER_TOKEN = "USERTOKEN";

const login = (data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(`${baseUrl}/login`, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return res.json();
    })
    .then((res) => {
      // save to cookie
      cookieService.setCookie(USER_TOKEN, res.USERTOKEN);
      return res;
    });
};

const getToken = () => {
  return cookieService.getCookie(USER_TOKEN);
};

const isAuthorized = () => {
  return Boolean(getToken());
};

const logOut = () => {
  cookieService.removeCookie(USER_TOKEN);
};

export default Object.assign(
  {},
  {
    login,
    isAuthorized,
    logOut,
    getToken,
  }
);
