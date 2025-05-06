// api.js
import axios from "axios";

const api = axios.create({
	baseURL: "https://127.0.0.1:8000/api",
	timeout: 10000,
});

// Request interceptor
api.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("access");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) {
			window.location.href = "/login";
		}
		return Promise.reject(error);
	}
);

export default api;
