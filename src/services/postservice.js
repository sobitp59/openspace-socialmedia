import axios from "axios";

export const getUserPosts = (username) => {
    return axios.get(`/api/posts/user/${username}`)
}

export const getUserPostDetails = (postId) => {
    return axios.get(`/api/posts/${postId}`)
}

export const likePostService = (postId, encodedToken) => {
    return axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
        )
}

export const dislikePostService = (postId, encodedToken) => {
    return axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
        )
}

export const getAllPostsService = () => {
    return axios.get(`/api/posts`);
}


export const addCommentService = (postId, commentData, encodedToken) => {
    return axios.post(
        `/api/comments/add/${postId}`,
        {commentData : commentData},
        {headers : {authorization : encodedToken}}

        )
}

export const addPostService = ( postData, encodedToken) => {
    return axios.post(
        `/api/user/posts/`,
        {postData : postData},
        {headers : {authorization : encodedToken}}

        )
}

export const updatedUserHandleService = (userData, encodedToken) => {
    return axios.post(`/api/users/edit`, 
        {userData : userData},
        {headers : {authorization : encodedToken}}
    )
}

export const updatedPostService = (postId, postData, encodedToken) => {
    return axios.post(`/api/posts/edit/${postId}`, 
        {postData : postData},
        {headers : {authorization : encodedToken}}
    )
}