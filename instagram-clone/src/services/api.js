import axios from "axios";

const api = axios.create({
    baseURL: "http://172.16.29.243:3000/"
})

export default api;