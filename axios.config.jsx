import axios from "axios";

// Axios instance
const apiInstance = axios.create({
    baseURL:  `https://api.oumardev.com`,
    timeout: 11000,
});

//https://api.oumardev.com

export default apiInstance