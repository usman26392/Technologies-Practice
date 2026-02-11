import axios from "axios";

const apiInstance = axios.create({
    baseURL: "http://localhost:5001/api/",
});

export default apiInstance;
