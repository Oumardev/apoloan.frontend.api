import axios from "axios";

// Axios instance
const apiInstance = axios.create({
    baseURL:  `http://192.168.1.6:1000`,
    timeout: 11000,
});

//https://api.oumardev.com

export default apiInstance