import "./css/Notifications.css";

import NotificationListItem from "../Components/Notifications/NotificationListItem";
import React, { useEffect, useState } from "react";
import SortBy from "../Components/Reusable/SortBy";
import useFetch from "../Hooks/Fetch/useFetch";
import { AuthContext } from "../Hooks/Auth/AuthContext";
import LoadingSpinner from "../Components/Reusable/LoadingSpinner";
import { BiRefresh } from "react-icons/bi";

function Notifications() {
  const callEndpoint = useFetch(AuthContext);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [limit, setLimit] = useState(10);

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
    console.log(res);
    setNotifications(res);
    setLoading(false);
  }

  return (
    <div className="notifications">
      <div className="notifications__header">
        <h1>Notifications</h1>
        {/* <SortBy /> */}
        <BiRefresh
          style={{ fontSize: "2em", color: "#1F6CB0" }}
          className="feedHeader__refresh"
          onClick={() => setRefresh(!refresh)}
        />
      </div>
      {!loading ? (
        <>
          {!notifications.length ? (
            <p style={{ textAlign: "center" }}>No notifications</p>
          ) : null}
          <div className="notifications__list">
            {notifications.slice(0, limit).map((n) => (
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
            <div className="createPostButton">
              <button
                onClick={() => setLimit(limit + 5)}
                disabled={notifications.length < limit}
                style={{ display: "block", margin: "auto" }}
              >
                Load more
              </button>
            </div>
          </div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default Notifications;
