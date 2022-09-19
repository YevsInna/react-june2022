import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getAllUsers = () => {
    return axiosInstance.get('/users')
};

const getAllPosts = () => {
    return axiosInstance.get('/posts')
};

export {getAllUsers, getAllPosts};