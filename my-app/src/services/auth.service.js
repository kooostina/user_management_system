import Constants from "../constants/constants.service";
import CookieService from "./cookie.service";

const baseUrl = Constants.getBaseUrl();
const cookieService = new CookieService();

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
      cookieService.setCookie(Constants.USER_TOKEN, res.USERTOKEN);
      return res;
    });
};

const getToken = () => {
  return cookieService.getCookie(Constants.USER_TOKEN);
};

const isAuthorized = () => {
  return Boolean(getToken());
};

const logOut = () => {
  cookieService.removeCookie(Constants.USER_TOKEN);
};

export { login, isAuthorized, logOut, getToken };
