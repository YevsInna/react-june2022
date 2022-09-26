import {axiosService} from "./axios.service";
import {urls} from "../configs";

const postsService = {
    getById: (postId)=>axiosService.get(`${urls.posts}/${postId}`)

};

export {postsService};