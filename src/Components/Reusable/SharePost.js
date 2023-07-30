import { IoShareSocialOutline } from "react-icons/io5";
import HeaderDropdown from "../Header/HeaderDropdown";
import "./css/SharePost.css";

import React, { useRef, useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsReddit } from "react-icons/bs";

function SharePost() {
  const [iconHover, setIconHover] = useState(false);
  const [dropHover, setDropHover] = useState(false);
  const [open, setOpen] = useState(false);

  const timeoutId = useRef(null);

  const picHoverHandle = () => {
    setIconHover(true);
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
      timeoutId.current = null;
    }
  };

  const picOutHandle = () => {
    timeoutId.current = setTimeout(() => setIconHover(false), 200);
  };

  return (
    <div className="sharePost">
      <IoShareSocialOutline
        onMouseOver={picHoverHandle}
        onMouseOut={picOutHandle}
        style={{ cursor: "pointer" }}
        onClick={() => setOpen(!open)}
      />
      {iconHover || dropHover || open ? (
        <div
          className="sharePost__dropdown"
          onMouseEnter={() => setDropHover(true)}
          onMouseLeave={() => setDropHover(false)}
        >
          <a
            href={`https://twitter.com`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href={`https://www.reddit.com`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsReddit />
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default SharePost;
