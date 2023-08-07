import "./css/NotificationListItem.css";

import PicAndUsername from "../Reusable/PicAndUsername";
import React, { useContext } from "react";
import Time from "../Reusable/Time";
import { AuthContext } from "../../Hooks/Auth/AuthContext";
import { FaAward } from "react-icons/fa";
import { BsPersonCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

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
          <FaAward
            style={{ color: "#BCB500", fontSize: "1.8rem", width: "50px" }}
          />
        ) : type === "FRIEND_REQUEST" ? (
          <BsPersonCheckFill
            style={{ color: "#1F6CB0", fontSize: "1.8rem", width: "50px" }}
          />
        ) : (
          <Link
            to={`/post/${post.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="profilePostImage">
              {post.type === "IMAGE" ? (
                <img src={post.content} alt="" />
              ) : post.type === "VIDEO" && /youtube.com/.test(post.content) ? (
                <img
                  src={`https://img.youtube.com/vi/${
                    post.content.match(/embed\/(.*)/)?.[1]
                  }/hqdefault.jpg`}
                  alt=""
                />
              ) : post.type === "VIDEO" && /gfycat.com/.test(post.content) ? (
                <img
                  src="https://avatars.slack-edge.com/2017-06-27/204593930725_22980b41a78939269ae9_512.png"
                  alt=""
                />
              ) : post.type === "TEXT" ? (
                <p className="profilePost__text">{post.content}</p>
              ) : null}
            </div>
          </Link>
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
