import axios from 'axios';

export const getAllUsersService = () => {
    return axios.get('/api/users')
}

export const getUserService = (userId) => {
    return axios.get(`/api/users/${userId}`)
}

export const getBookmarkService = () => {
    return axios.get(`/api/users/bookmark/`)
}

export const postBookmarkService = (postId, encodedToken) => {
    return axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
        )
}

export const removeBookmarkService = (postId, encodedToken) => {
    return axios.post(
        `/api/users/remove-bookmark/${postId}/`,
        {},
        {
          headers: { authorization: encodedToken },
        }
        )
}



