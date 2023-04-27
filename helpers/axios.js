import { BASE_URL } from "@/config";
import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-CSRFToken": Cookies.get("csrftoken"),
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (request) => {
    if (request.method == "POST") {
      if (request.data instanceof FormData) {
        request.headers["Content-Type"] = "multipart/form-data";
      }
      if (!Cookies.get("csrftoken")) axios(`${BASE_URL}/v1/user/csrf/`);
    }
    return request;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
