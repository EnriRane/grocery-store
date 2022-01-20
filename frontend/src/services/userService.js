import http from "./httpService";
import config from "../config.json";

export function register(user) {
  return http.post(config.apiUrl + "/users", {
    email: user.email,
    password: user.password,
    name: user.name,
    address: user.address,
  });
}

export function update(user, id) {
  return http.put(config.apiUrl + `/users/${id}`, {
    email: user.email,
    password: user.password,
    name: user.name,
    address: user.address,
  });
}
