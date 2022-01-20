import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    toast.error("An unexpected error occured");
    return Promise.reject(error);
  } else {
    if (error.response && error.response.status === 400) {
      toast.error("You made a bad request!");
      return Promise.reject(error);
    }
  }
});
export function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-service"] = jwt;
}
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
