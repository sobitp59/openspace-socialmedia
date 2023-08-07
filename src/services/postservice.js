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