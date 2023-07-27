import axios from 'axios';

export const getAllUsersService = () => {
    return axios.get('/api/users')
}

export const getUserService = (userId) => {
    return axios.get(`/api/users/${userId}`)
}