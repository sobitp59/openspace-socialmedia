import axios from "axios";

export const userLoginService = (username, password) => {
    return axios.post("/api/auth/login", {
        username, password
    })
}


export const userSignupnService = (firstname, lastname, email, password) => {
    return axios.post("/api/auth/signup", {
        firstname, lastname, email, password
    })
}