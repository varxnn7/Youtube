import React from "react";

const Button = ({ name, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-sm rounded-lg whitespace-nowrap font-medium transition-colors cursor-pointer ${
        isActive
          ? "bg-black text-white"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
    >
      {name}
    </button>
  );
};

export default Button;