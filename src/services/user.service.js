import {axiosService} from "./axios.service";
import {urls} from "../configs";
import user from "../components/user/User";

const userService = {
    getAll: () => axiosService.get(urls.users),
    createUser: ()=> axiosService.post(urls.users, user)
};

export {userService};
