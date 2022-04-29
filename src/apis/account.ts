import request from "../utils/request";

export function loginUser() {
  return request({
    url: `loginUser`,
    method: "get",
  });
}
