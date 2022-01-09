import Cookies from "universal-cookie";
const cookies = new Cookies();

const setCookie = (key, value) => {
  cookies.set(key, value);
};

const getCookie = (key) => {
  return cookies.get(key);
};

const removeCookie = (key) => {
  return cookies.remove(key);
};

export default Object.assign(
  {},
  {
    setCookie,
    getCookie,
    removeCookie,
  }
);
