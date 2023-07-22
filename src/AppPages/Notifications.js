import "./css/Notifications.css";

import NotificationListItem from "../Components/Notifications/NotificationListItem";
import React from 'react';
import SortBy from "../Components/Reusable/SortBy";

function Notifications() {
    return (
      <div className="notifications">
        <div className="notifications__header">
          <h1>Notifications</h1>
          <SortBy />
        </div>
        <div className="notifications__list">
            <NotificationListItem />
            <NotificationListItem />
            <NotificationListItem />
        </div>
      </div>
    );
}

export default Notifications
