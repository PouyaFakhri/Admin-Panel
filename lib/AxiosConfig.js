import axios from "axios";
import getTokenFromClient from "../utils/cookies";

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });

api.interceptors.request.use(
  (config) => {
    const token = getTokenFromClient();
    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api
