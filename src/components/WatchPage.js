import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

function WatchPage() {
    const dispatch = useDispatch();

  const [URLSearchParams] = useSearchParams();
  const videoId = URLSearchParams.get("v");

  useEffect(()=>{
    dispatch(closeMenu());
  },[]);

  return (
    <div className="">
        <div className="px-5">
            <iframe
                width="1000"
                height="500"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg"
            ></iframe>
        </div>
    </div>
  );
}

export default WatchPage;
