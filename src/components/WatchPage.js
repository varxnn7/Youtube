import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, openMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import {
  YOUTUBE_VIDEO_BY_ID_API,
  YOUTUBE_COMMENTS_API,
} from "../utils/constants";
import { formatViewCount, timeAgo } from "../utils/helper";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  const [videoInfo, setVideoInfo] = useState(null);
  const [comments, setComments] = useState([]);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const fetchVideoInfo = async () => {
      try {
        const data = await fetch(YOUTUBE_VIDEO_BY_ID_API + videoId);
        const json = await data.json();
        if (json.items && json.items.length > 0) {
          setVideoInfo(json.items[0]);
        }
      } catch (error) {
        console.error("Error fetching video info:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const data = await fetch(YOUTUBE_COMMENTS_API + videoId);
        const json = await data.json();
        setComments(json.items || []);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    dispatch(closeMenu());
    fetchVideoInfo();
    fetchComments();

    return () => {
      dispatch(openMenu());
    };
  }, [videoId, dispatch]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-6 py-4 w-full">
      {/* Left section - Video player + info */}
      <div className="flex-1 max-w-[900px]">
        {/* Video Player */}
        <div className="w-full rounded-xl overflow-hidden bg-black aspect-video">
          <iframe
            className="w-full h-full"
            src={
              "https://www.youtube.com/embed/" +
              videoId +
              "?autoplay=1&rel=0"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Info */}
        {videoInfo && (
          <div className="mt-3">
            <h1 className="text-xl font-semibold text-gray-900 leading-7">
              {videoInfo.snippet?.title}
            </h1>

            <div className="flex items-center justify-between mt-3 flex-wrap gap-3">
              {/* Channel info */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-red-500 flex items-center justify-center text-white font-bold">
                  {videoInfo.snippet?.channelTitle?.charAt(0)?.toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {videoInfo.snippet?.channelTitle}
                  </p>
                </div>
                <button className="ml-4 bg-black text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
                  Subscribe
                </button>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
                  <button className="flex items-center gap-1 px-4 py-2 hover:bg-gray-200 transition-colors text-sm font-medium">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H1v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C19.03,12.91,19.27,12.62,18.77,11z M7,20H4v-8h3V20z M17.98,13.17l-1.34,6 C16.57,19.46,16.23,19.67,15.85,19.67H8V11.6l5.57-6.09C13.68,5.38,13.84,5.3,14,5.3c0.31,0,0.57,0.2,0.57,0.45v0.25l-1.57,5H18 c0.16,0,0.31,0.05,0.39,0.14C18.46,11.22,18.02,12.95,17.98,13.17z"/>
                    </svg>
                    {formatViewCount(videoInfo.statistics?.likeCount)}
                  </button>
                  <div className="w-[1px] h-6 bg-gray-300"></div>
                  <button className="px-4 py-2 hover:bg-gray-200 transition-colors">
                    <svg className="h-5 w-5 rotate-180" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H1v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C19.03,12.91,19.27,12.62,18.77,11z"/>
                    </svg>
                  </button>
                </div>

                <button className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 hover:bg-gray-200 transition-colors text-sm font-medium">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15 5.63L20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"/>
                  </svg>
                  Share
                </button>

                <button className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 hover:bg-gray-200 transition-colors text-sm font-medium">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"/>
                  </svg>
                  Download
                </button>
              </div>
            </div>

            {/* Description */}
            <div
              className="mt-4 bg-gray-100 rounded-xl p-3 cursor-pointer hover:bg-gray-200 transition-colors"
              onClick={() => setShowDescription(!showDescription)}
            >
              <div className="flex gap-2 text-sm font-medium">
                <span>
                  {formatViewCount(videoInfo.statistics?.viewCount)} views
                </span>
                <span>{timeAgo(videoInfo.snippet?.publishedAt)}</span>
              </div>
              <p
                className={`text-sm mt-2 whitespace-pre-wrap ${
                  showDescription ? "" : "line-clamp-2"
                }`}
              >
                {videoInfo.snippet?.description}
              </p>
              {!showDescription && (
                <span className="text-sm font-medium mt-1 inline-block">
                  ...more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Comments Section */}
        <div className="mt-6 mb-10">
          <h2 className="text-lg font-semibold mb-4">
            {comments.length} Comments
          </h2>

          {/* Comment input */}
          <div className="flex items-start gap-3 mb-6">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-bold shrink-0">
              U
            </div>
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full border-b border-gray-300 pb-1 text-sm outline-none focus:border-b-2 focus:border-black transition-colors"
            />
          </div>

          {/* Comments list */}
          <div className="space-y-4">
            {comments.map((comment) => {
              const topComment =
                comment?.snippet?.topLevelComment?.snippet;
              if (!topComment) return null;

              return (
                <div key={comment.id} className="flex gap-3">
                  <img
                    className="h-10 w-10 rounded-full shrink-0 object-cover"
                    src={topComment.authorProfileImageUrl}
                    alt={topComment.authorDisplayName}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-medium">
                        {topComment.authorDisplayName}
                      </span>
                      <span className="text-xs text-gray-500">
                        {timeAgo(topComment.publishedAt)}
                      </span>
                    </div>
                    <p className="text-sm mt-1 leading-5">
                      {topComment.textDisplay}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H1v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C19.03,12.91,19.27,12.62,18.77,11z"/>
                        </svg>
                        {topComment.likeCount > 0 && topComment.likeCount}
                      </button>
                      <button className="text-xs text-gray-600 hover:text-gray-900">
                        <svg className="h-4 w-4 rotate-180" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H1v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C19.03,12.91,19.27,12.62,18.77,11z"/>
                        </svg>
                      </button>
                      <button className="text-xs text-gray-600 hover:text-gray-900 font-medium">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right section - Suggested videos placeholder */}
      <div className="w-full lg:w-[400px] shrink-0">
        <div className="space-y-3">
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="flex gap-2 animate-pulse">
                <div className="bg-gray-200 rounded-lg h-[94px] w-[168px] shrink-0"></div>
                <div className="flex-1">
                  <div className="bg-gray-200 h-4 rounded w-full mb-2"></div>
                  <div className="bg-gray-200 h-3 rounded w-3/4 mb-1"></div>
                  <div className="bg-gray-200 h-3 rounded w-1/2"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
