import "./css/Notifications.css";

import NotificationListItem from "../Components/Notifications/NotificationListItem";
import React, { useEffect, useState } from "react";
import SortBy from "../Components/Reusable/SortBy";
import useFetch from "../Hooks/Fetch/useFetch";
import { AuthContext } from "../Hooks/Auth/AuthContext";
import LoadingSpinner from "../Components/Reusable/LoadingSpinner";

function Notifications() {
  const callEndpoint = useFetch(AuthContext);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setLoading(true);
    getNotifications();
  }, [refresh]);

  async function getNotifications() {
    const { res } = await callEndpoint(
      `/notifications`,
      "GET",
      undefined,
      "application/JSON"
    );
    console.log(res)
    setNotifications(res);
    setLoading(false);
  }

  return (
    <div className="notifications">
      <div className="notifications__header">
        <h1>Notifications</h1>
        <SortBy />
      </div>
      {!loading ? (
        <>
          {!notifications.length ? (
            <p style={{ textAlign: "center" }}>No notifications</p>
          ) : null}
          <div className="notifications__list">
            {notifications.map((n) => (
              <NotificationListItem
                timestamp={n.timestamp}
                message={n.message}
                username={n.messageAccount.username}
                displayName={n.messageAccount.displayName}
                post={n.post}
                type={n.type}
                key={n.id}
              />
            ))}
          </div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default Notifications;
