import axios from "axios";

export const LoginService = (email, password) => {
    axios.post("/api/auth/login", {
        email, password
    })
}


export const SignupService = (firstname, lastname, email, password) => {
    axios.post("/api/auth/signup", {
        firstname, lastname, email, password
    })
}