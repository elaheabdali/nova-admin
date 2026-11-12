import axios, { type AxiosError } from 'axios';
import { authStorage } from '../../Storage/authStorage';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://fakestoreapi.com',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

axiosInstance.interceptors.request.use((config) => {
  const token = authStorage.getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string }>) => {
    const message =
      error.response?.data?.message || error.message || 'Request failed';
    return Promise.reject(new Error(message));
  },
);
