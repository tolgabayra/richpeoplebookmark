import axios from "axios"
export const appAxios = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: false,
    headers: {
        tokenX: "myToken",
        "Content-Type": "application/json"
    }
})