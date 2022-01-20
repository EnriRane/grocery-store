import http from "./httpService";
import config from "../config.json";

export function getMostSoldProducts() {
  return http.get(config.apiUrl + "/orders");
}

export function getAllProducts() {
  return http.get(config.apiUrl + "/products");
}
