import "./css/NotificationListItem.css";

import PicAndUsername from "../Reusable/PicAndUsername";
import React from 'react'
import Time from "../Reusable/Time";

function NotificationListItem({timestamp, message, displayName, imgUrl, profilePictureUrl}) {
    return (
      <div className="notificationListItem">
        <div className="notificationListItem__time">
          <Time />
        </div>
        <div className="notificationListItem__content">
          <h5>Jason tagged you recently</h5>
          <img
            src="https://images.unsplash.com/photo-1638365448598-8fb987e93be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="notificationListItem__username">
          <PicAndUsername />
        </div>
      </div>
    );
}

export default NotificationListItem
