import axios from "axios";

// Axios instance
const apiInstance = axios.create({
    baseURL:  `https://api.oumardev.com`,
    timeout: 11000,
});

export default apiInstance