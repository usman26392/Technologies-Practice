import axios from "axios";

// in development, we want to use the local backend server, but in production, we want to use the same origin (assuming the backend is served from the same domain)
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

const apiInstance = axios.create({
    baseURL: BASE_URL,
});

export default apiInstance;
