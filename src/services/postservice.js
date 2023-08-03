import axios from "axios";

export const getUserPosts = (username) => {
    return axios.get(`/api/posts/user/${username}`)
}

export const getUserPostDetails = (postId) => {
    return axios.get(`/api/posts/${postId}`)
}