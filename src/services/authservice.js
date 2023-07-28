import axios from "axios";

export const userLoginService = (username, password) => {
    return axios.post("/api/auth/login", {
        username, password
    })
}


export const userSignupService = (firstName, lastName, username, password) => {
    return axios.post("/api/auth/signup", {
        firstName : firstName, 
        lastName : lastName, 
        username : username, 
        password : password,   
    })
}