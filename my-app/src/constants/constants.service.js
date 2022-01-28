const PROTOCOL = "http";
const HOST = "localhost";
const PORT = 3000;
const VERSION_API = "v1";
const USER_TOKEN = "USERTOKEN";
const DEPARTMENTS = "/departments";
const LOGIN = "/login";

const getBaseUrl = () => {
  return `${PROTOCOL}://${HOST}:${PORT}/api/${VERSION_API}`;
};

const generateEmployeesUrl = (segment, departmentId) => {
  return `${segment}/${departmentId}/employees`;
};

export {
  HOST,
  getBaseUrl,
  generateEmployeesUrl,
  USER_TOKEN,
  DEPARTMENTS,
  LOGIN,
};
