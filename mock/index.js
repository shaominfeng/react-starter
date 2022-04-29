const delay = require("mocker-api/lib/delay");
const options = require("./options");
const apis = require("./api");

const proxy = { ...options };
for (const api of Object.values(apis)) {
  Object.assign(proxy, api);
}

module.exports = delay(proxy, 500);
