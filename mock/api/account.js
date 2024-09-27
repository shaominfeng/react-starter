const fs = require("fs");
const path = require("path");
const BASE_PATH = "/mock/bff";
const resource = "account";
/**
 *
 * @param {String} resource resource
 * @param {String} method request method
 * @param {Function} cb handler
 */
const produceRequest = (api, method, cb) => {
  const key = `${method.toUpperCase()} ${BASE_PATH}/${api}`;
  const file = path.join(__dirname, `../data/${resource}.json`);
  const data = fs.readFileSync(file, "utf-8");
  const dataJson = JSON.parse(data)[api];

  return {
    [key]: (req, res) => cb(res, dataJson),
  };
};

module.exports = {
  /**
   * method two : mock data with mockjs (http://mockjs.com/)
   */
  ...produceRequest("loginUser", "GET", (res, data) =>
    res.json({
      status: 200,
      message: "success",
      data: data,
    }),
  ),
};
