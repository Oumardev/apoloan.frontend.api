import axios from "axios";

// Axios instance
const apiInstance = axios.create({
    baseURL:  `http://www.oumardev.com:1000`,
    timeout: 11000,
});

export default apiInstance