import { API_VERSION, BASE_URL } from "@/config";
import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (request) => {
    if (request.method == "POST") {
      if (request.data instanceof FormData) {
        request.headers["Content-Type"] = "multipart/form-data";
      }
      console.log(Cookies.get("csrftoken"));
      if (Cookies.get("csrftoken") == undefined)
        axios(`${BASE_URL}/${API_VERSION}/user/csrf/`, {
          withCredentials: true,
        });
    }
    return request;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
