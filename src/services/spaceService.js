import axios from "axios";

const axiosInstance = axios.create({baseURL: 'https://api.spacexdata.com/v3/launches/'});

const getSpace = ()=>{
    return axiosInstance.get()
};

export {getSpace};