import React, {useEffect, useState} from 'react';

import {albumsService} from "../../services";
import {Album} from "../Album/Album";

const Albums = () => {

    const [albums, setAlbums] = useState([]);
    useEffect(()=>{
        albumsService.getAll().then(value => setAlbums(value.data))
    },[]);

    return (
        <div>
            {
                albums.map(album=><Album album={album} key={album.id}/>)
            }
        </div>
    );
};

export {Albums};