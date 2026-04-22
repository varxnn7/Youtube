import React from "react";
import { useSelector } from "react-redux";


const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-4 w-56 shadow-sm min-h-screen shrink-0">
      {/* Main navigation */}
      <ul className="space-y-1">
        <li className="flex items-center gap-5 px-3 py-2 rounded-lg bg-gray-100 font-medium text-sm cursor-pointer">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 10v11h6v-7h4v7h6V10l-8-7z" />
          </svg>
          Home
        </li>
        <li className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm cursor-pointer transition-colors">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25z"/>
          </svg>
          Shorts
        </li>
        <li className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm cursor-pointer transition-colors">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 20V10h18v10H3z"/>
          </svg>
          Subscriptions
        </li>
      </ul>

      <hr className="my-3 border-gray-200" />

      {/* You section */}
      <h2 className="px-3 text-[15px] font-medium mb-1">You</h2>
      <ul className="space-y-1">
        <li className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm cursor-pointer transition-colors">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 7l6 3.5L11 14V7zm7-4H6a1 1 0 00-1 1v16.87l1-.78 1 .78 1-.78 1 .78 1-.78 1 .78 1-.78 1 .78 1-.78 1 .78 1-.78 1 .78V4a1 1 0 00-1-1zm0 16.12l-1-.78-1 .78-1-.78-1 .78-1-.78-1 .78-1-.78-1 .78-1-.78-1 .78V4h12v15.12z"/>
          </svg>
          Your Channel
        </li>
        <li className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm cursor-pointer transition-colors">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.97 16.95L10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38C4.17 7.56 4.06 7.75 3.97 7.94L4.84 8.5C5.68 5.72 8.11 3.8 11 3.26V1h2v2.26c4.71.91 8 5.06 8 8.74z"/>
          </svg>
          History
        </li>
        <li className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm cursor-pointer transition-colors">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z"/>
          </svg>
          Your Videos
        </li>
        <li className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm cursor-pointer transition-colors">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3.67l-1.67-1.67L9 3.33V1H7v2.33L5.67 2l-1.67 1.67L5.33 5H3v2h2.33l-1.33 1.33 1.67 1.67L7 8.67V11h2V8.67L10.33 10l1.67-1.67L10.67 7H13V5h-2.33L12 3.67zM14 17H2v-1h12v1zm8-4H2v-1h20v1zm0-4H2V8h20v1z"/>
          </svg>
          Watch Later
        </li>
        <li className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm cursor-pointer transition-colors">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"/>
          </svg>
          Liked Videos
        </li>
      </ul>

      <hr className="my-3 border-gray-200" />

      {/* Explore section */}
      <h2 className="px-3 text-[15px] font-medium mb-1">Explore</h2>
      <ul className="space-y-1">
        <li className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm cursor-pointer transition-colors">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66C13.3 7.26 13 5.73 13.45 4c-1.15.51-2.07 1.37-2.72 2.39C9.91 7.66 9.68 9.09 10.08 10.45c.02.06.03.13.03.2 0 .27-.2.5-.47.55-.27.05-.5-.1-.6-.35-.02-.05-.03-.1-.04-.15C8.5 9.8 8.6 8.76 9.08 7.84c-1.08 1.2-1.58 2.88-1.53 4.48.01.25.03.5.06.76.13 1.07.53 2.08 1.13 2.95.64.9 1.52 1.62 2.57 2.02 1.1.43 2.3.49 3.45.24 1.2-.27 2.27-1 3-2.03.83-1.18 1.05-2.68.62-4.06-.1-.32-.24-.63-.4-.93zM14.84 17.52c-.39.26-.84.42-1.31.47-.47.05-.96-.02-1.4-.19-.83-.34-1.47-1.04-1.73-1.88-.2-.63-.16-1.25.06-1.86.16-.44.4-.83.66-1.19.27.2.56.37.87.53.56.29 1.05.7 1.37 1.23.32.52.43 1.13.35 1.72-.01.1-.02.2-.04.3.62-.24 1.13-.7 1.44-1.27.34-.62.46-1.36.33-2.07-.16-.84-.56-1.62-1.11-2.26-.2-.23-.43-.43-.66-.63 0 .06-.01.12-.01.18-.03.66-.27 1.3-.63 1.85-.36.56-.85 1.02-1.4 1.36-.55.34-1.16.56-1.8.63.6.28 1.28.38 1.96.31.68-.07 1.32-.33 1.85-.74z"/>
          </svg>
          Trending
        </li>
        <li className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm cursor-pointer transition-colors">
          🎵 Music
        </li>
        <li className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm cursor-pointer transition-colors">
          🎮 Gaming
        </li>
        <li className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm cursor-pointer transition-colors">
          📰 News
        </li>
        <li className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm cursor-pointer transition-colors">
          ⚽ Sports
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;