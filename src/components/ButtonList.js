import React, { useState } from "react";
import Button from "./Button";

const list = [
  "All",
  "Music",
  "Gaming",
  "Live",
  "News",
  "Sports",
  "Comedy",
  "Cooking",
  "Recently uploaded",
  "Watched",
  "New to you",
];

const ButtonList = () => {
  const [activeBtn, setActiveBtn] = useState("All");

  return (
    <div className="flex overflow-x-auto gap-3 px-4 py-3 sticky top-[56px] bg-white z-40 no-scrollbar">
      {list.map((name) => (
        <Button
          key={name}
          name={name}
          isActive={activeBtn === name}
          onClick={() => setActiveBtn(name)}
        />
      ))}
    </div>
  );
};

export default ButtonList;