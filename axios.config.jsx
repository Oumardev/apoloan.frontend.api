import axios from "axios";

// Axios instance
const apiInstance = axios.create({
    baseURL:  `https://api.oumardev.com`, // or https://api.oumardev.com in production
    timeout: 11000,
});

export default apiInstance