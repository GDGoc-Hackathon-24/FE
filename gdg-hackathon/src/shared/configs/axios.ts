// utils/api.ts
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://15.165.124.17:8080',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add Authorization header
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle token refresh logic here if necessary
      console.error('Unauthorized! Redirecting to login...');
      // Redirect to login or handle logout
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const get = (url: string, params?: any) => API.get(url, { params });
export const post = (url: string, data?: any) => API.post(url, data);
export const put = (url: string, data?: any) => API.put(url, data);
export const del = (url: string) => API.delete(url);

export default API;