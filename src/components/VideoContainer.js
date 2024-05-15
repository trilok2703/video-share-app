import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { YOUTUBE_VIDEOS_API } from "../utils/constants";

import VideoCard from "./VideoCard";

function VideoContainer(){
    const [videos,setVideos] = useState([]);

    useEffect(()=>{
        getVideos();
    },[]);

    const getVideos = async () =>{
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items);
    }

    return !videos ? null : (
      <div className="flex flex-wrap">
        {videos.map((video) => (
            <Link key={video.id} to={"/watch?v=" + video.id}>
                <VideoCard videoInfo={video} />
            </Link>
        ))}
      </div>
    );
}

export default VideoContainer;