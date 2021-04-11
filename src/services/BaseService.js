import axios from "axios";
import { getAccessToken, logout } from "../store/AccessTokenStore";

export const create = (opts = {}) => {
  const http = axios.create({
    baseURL: "http://localhost:3001/api",
    ...opts,
  });

  http.interceptors.request.use((request) => {
    if (opts.useAccessToken !== false) {
      request.headers.common.Authorization = `Bearer ${getAccessToken()}`;
    } else {
      delete request.headers.common.Authorization;
    }

    return request;
  });

  http.interceptors.response.use(
    (response) => response.data,
    (error) => {
      if (
        opts.logoutOnUnauthorized &&
        error.response &&
        401 === error.response.status
      ) {
        logout();
        return;
      } else if (error.response.status === 403) {
        window.location.assign("/");
      }

      return Promise.reject(error);
    }
  );

  return http;
};
