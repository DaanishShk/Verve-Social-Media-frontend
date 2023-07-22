import "./css/PicAndUsername.css";

import ProfilePic from './ProfilePic';
import React from 'react'

// refactor classnames later 
function PicAndUsername({picSize, fontSize, imgUrl, username, displayName, isPicClickable=true}) {
    return (
      <div className="picAndUsername">
        <ProfilePic
          size={picSize}
          imgUrl={imgUrl}
          username={username}
          isClickable={isPicClickable}
        />
        <span style={{ fontSize: fontSize }}>{displayName}</span>
      </div>
    );
}

export default PicAndUsername
