import {axiosService} from "./axios.service";
import {urls} from "../configs";
import comment from "../components/comment/Comment";

const commentService = {
    getAll: ()=>axiosService.get(urls.comments),
    createComment: (comment)=>axiosService.post(urls.comments, comment)
};

export {commentService};