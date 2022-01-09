const PROTOCOL = "http";
const HOST = "localhost";
const PORT = 3000;
const VERSION_API = "v1";

const getBaseUrl = () => {
  return `${PROTOCOL}://${HOST}:${PORT}/api/${VERSION_API}`;
};

export default Object.assign(
  {},
  {
    HOST,
    getBaseUrl,
  }
);
