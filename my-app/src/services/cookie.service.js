import Cookies from "universal-cookie";
import { Component } from "react";

const cookies = new Cookies();
export default class CookieService extends Component {
  setCookie = (key, value) => {
    cookies.set(key, value);
  };

  getCookie = (key) => {
    return cookies.get(key);
  };

  removeCookie = (key) => {
    return cookies.remove(key);
  };
}
