import http from "./httpService";
import config from "../config.json";

export function placeOrder(order) {
  return http.post(config.apiUrl + "/orders", {
    user: order.user,
    products: order.products,
    totalPrice: order.totalPrice,
    paymentMethod: order.paymentMethod,
    status: order.status,
  });
}
