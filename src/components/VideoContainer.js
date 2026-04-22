import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items || []);
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-wrap gap-4 px-4 py-4">
        {Array(12)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="w-[360px] animate-pulse">
              <div className="bg-gray-200 rounded-xl h-[200px] w-full"></div>
              <div className="flex gap-3 mt-3">
                <div className="bg-gray-200 rounded-full h-9 w-9 shrink-0"></div>
                <div className="flex-1">
                  <div className="bg-gray-200 h-4 rounded w-full mb-2"></div>
                  <div className="bg-gray-200 h-3 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4 px-4 py-4">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;