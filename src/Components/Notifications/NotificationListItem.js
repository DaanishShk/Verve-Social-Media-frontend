import "./css/NotificationListItem.css";

import PicAndUsername from "../Reusable/PicAndUsername";
import React from 'react'
import Time from "../Reusable/Time";

function NotificationListItem({timestamp, message, username, displayName, imgUrl, profilePictureUrl}) {
    return (
      <div className="notificationListItem">
        <div className="notificationListItem__time">
          <Time timestamp={timestamp}/>
        </div>
        <div className="notificationListItem__content">
          <h5>{message}</h5>
          <img
            src={imgUrl}
            alt=""
          />
        </div>
        <div className="notificationListItem__username">
          <PicAndUsername displayName={displayName} imgUrl={profilePictureUrl} username={username}/>
        </div>
      </div>
    );
}

export default NotificationListItem
