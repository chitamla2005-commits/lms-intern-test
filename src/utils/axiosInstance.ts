import axios from "axios";
import { getCookie, deleteCookie } from "cookies-next";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 1. Interceptor gửi đi: Tự động đính kèm Token
axiosInstance.interceptors.request.use((config) => {
  const token = getCookie("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 2. Interceptor trả về: Xử lý lỗi token hết hạn (401)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      deleteCookie("access_token");
      window.location.href = "/login"; // Đá về trang login
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;