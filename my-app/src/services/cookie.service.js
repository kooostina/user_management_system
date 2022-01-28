import Cookies from "universal-cookie";

const cookies = new Cookies();

export default class CookieService {
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
