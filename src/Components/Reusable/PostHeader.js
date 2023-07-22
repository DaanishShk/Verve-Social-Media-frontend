import "./css/PostHeader.css";

import PicAndUsername from "./PicAndUsername";
import React from "react";
import Time from "./Time";

function PostHeader({picSize, fontSize, imgUrl, username, displayName, timeSize, timestamp}) {
  return (
    <div className="postHeader">
      <div className="postHeader__username">
        <PicAndUsername
          picSize={picSize}
          fontSize={fontSize}
          imgUrl={imgUrl}
          displayName={displayName}
          username={username}
        />
      </div>
      <div className="postHeader__time">
        <Time fontSize={timeSize} timestamp={timestamp}/>
      </div>
    </div>
  );
}

export default PostHeader;
