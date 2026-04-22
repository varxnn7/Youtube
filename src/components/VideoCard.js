import React from "react";
import { formatViewCount, timeAgo } from "../utils/helper";

const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="w-[360px] cursor-pointer group">
      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          className="w-full h-[200px] object-cover rounded-xl group-hover:rounded-none group-hover:scale-105 transition-all duration-200"
          alt={title}
          src={thumbnails?.medium?.url}
        />
      </div>

      {/* Video info */}
      <div className="flex gap-3 mt-3 pr-6">
        {/* Channel avatar placeholder */}
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 to-red-500 shrink-0 flex items-center justify-center text-white text-xs font-bold">
          {channelTitle?.charAt(0)?.toUpperCase()}
        </div>

        <div className="flex-1 min-w-0">
          {/* Title */}
          <h3 className="text-sm font-medium leading-5 line-clamp-2 text-gray-900">
            {title}
          </h3>

          {/* Channel name */}
          <p className="text-xs text-gray-600 mt-1 hover:text-gray-900 transition-colors">
            {channelTitle}
          </p>

          {/* Views and date */}
          <p className="text-xs text-gray-600">
            {statistics?.viewCount
              ? formatViewCount(statistics.viewCount) + " views"
              : ""}{" "}
            • {timeAgo(publishedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;