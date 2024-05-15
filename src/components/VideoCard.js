function VideoCard({videoInfo}){
    if(!videoInfo) return null;

    const {snippet,statistics} = videoInfo;
    const {channelTitle,thumbnails,title} = snippet;

    return (
        <div className="w-72 m-2 p-2 shadow-lg">
            <img alt="video-thumbnail" src={thumbnails.medium.url} className="rounded-lg"/>
            <p className="line-clamp-2 font-bold my-2">{title}</p>
            <p className="text-md text-gray-500">{channelTitle}</p>
            <p className="text-md text-gray-500">{statistics.viewCount} views</p>
        </div>
    )
}

export default VideoCard;