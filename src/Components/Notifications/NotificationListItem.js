import "./css/NotificationListItem.css";

import PicAndUsername from "../Reusable/PicAndUsername";
import React, { useContext } from "react";
import Time from "../Reusable/Time";
import { AuthContext } from "../../Hooks/Auth/AuthContext";
import { FaAward } from "react-icons/fa";
import { BsPersonCheckFill } from "react-icons/bs";

function NotificationListItem({
  timestamp,
  message,
  username,
  displayName,
  post,
  type,
}) {
  const { baseUrl } = useContext(AuthContext);

  return (
    <div className="notificationListItem">
      <div className="notificationListItem__time">
        <Time timestamp={timestamp} />
      </div>
      <div className="notificationListItem__content">
        <h5>{message}</h5>
        {type === "ACHIEVEMENT" ? (
          <FaAward style={{ color: "#BCB500", fontSize: "1.7rem" }} />
        ) : type === "FRIEND_REQUEST" ? (
          <BsPersonCheckFill style={{ color: "#1F6CB0", fontSize: "1.7rem" }} />
        ) : (
          <img
            src={post.content}
            alt=""
          />
        )}
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

export default NotificationListItem;
