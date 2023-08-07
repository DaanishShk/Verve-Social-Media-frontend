import "./css/NotificationListItem.css";

import PicAndUsername from "../Reusable/PicAndUsername";
import React, { useContext } from 'react'
import Time from "../Reusable/Time";
import { AuthContext } from "../../Hooks/Auth/AuthContext";

function NotificationListItem({ timestamp, message, username, displayName, post, type }) {
  
  const { baseUrl } = useContext(AuthContext);

    return (
      <div className="notificationListItem">
        <div className="notificationListItem__time">
          <Time timestamp={timestamp} />
        </div>
        <div className="notificationListItem__content">
          <h5>{message}</h5>
          <img
            // src={imgUrl}
            alt=""
          />
        </div>
        <div className="notificationListItem__username">
          <PicAndUsername
            displayName={displayName}
            imgUrl={`${baseUrl}/images/${username}/profilepic`}
            username={username}
          />
        </div>
      </div>
    );
}

export default NotificationListItem
