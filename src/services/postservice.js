import axios from "axios";

export const getUserPosts = (username) => {
    return axios.get(`/api/posts/user/${username}`)
}