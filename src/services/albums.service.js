import {axiosService} from "./axios.service";
import {urls} from "../configs";

const albumsService = {
    getAll: ()=> axiosService.get(urls.albums)
};

export {albumsService};