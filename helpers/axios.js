import { BASE_URL } from "@/config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  xsrfCookieName: "77SDESIGN_CSRF_TOKEN",
  xsrfHeaderName: "X-CSRFToken",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (request) => {
    if (request.method == "POST") {
      if (request.data instanceof FormData) {
        request.headers["Content-Type"] = "multipart/form-data";
      }
    }
    return request;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
