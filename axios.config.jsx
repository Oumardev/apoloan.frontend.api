import axios from "axios";

// Axios instance
const apiInstance = axios.create({
    baseURL:  `http://192.168.1.103:1000`, // or https://api.oumardev.com in production
    timeout: 11000,
});

export default apiInstance