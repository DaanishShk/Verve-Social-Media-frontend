import "./css/PostCard.css";

import { Link } from "react-router-dom";
import PostButtons from "../Reusable/PostButtons";
import PostHeader from "../Reusable/PostHeader";
import React from "react";
import TextPost from "./TextPost";
import { useState } from "react";

function PostCard({
  content,
  type,
  dimensions,
  profilePicUrl,
  title,
  username,
  displayName,
  commentsLength,
  countVotes,
  userVoteType,
  entityId,
  timestamp,
  visibility:postVisibility
}) {
  const [span, setSpan] = useState(20);
  const [visibility, setVisibility] = useState("hidden");

  const handleLoad = (e) => {
    // console.log(e.target.clientHeight);
    e.preventDefault();
    setSpan(parseInt(17 + e.target.clientHeight / 10));
    setVisibility("visible");
  };

  const videoStyle = /gfycat.com/.test(content) ? "+ 44px" : "";

  return (
    <div
      className="postCard"
      style={{ gridRowEnd: `span ${span}`, visibility }}
    >
      <PostHeader
        username={username}
        displayName={displayName}
        imgUrl={profilePicUrl}
        timestamp={timestamp}
      />
      <Link
        to={`/post/${entityId}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <h5>{title}</h5>
        {type === "IMAGE" ? (
          <img
            src={content}
            alt=""
            className="postCard__image"
            onLoad={handleLoad}
            onError={handleLoad}
          />
        ) : type === "VIDEO" ? (
          <div
            className="video postCard__video"
            style={{ paddingBottom: `calc(56.25% ${videoStyle})` }}
          >
            <iframe
              src={content}
              title="video player"
              frameBorder="0"
              allowFullScreen
              onLoad={handleLoad}
              loading="lazy"
            ></iframe>
          </div>
        ) : type === "TEXT" ? (
          <TextPost
            content={content}
            setSpan={setSpan}
            setVisibility={setVisibility}
          />
        ) : null}
      </Link>

      <PostButtons
        commentsLength={commentsLength}
        countVotes={countVotes}
        userVoteType={userVoteType}
        entityId={entityId}
        entityType={"posts"}
        visibility={postVisibility}
      />
    </div>
  );
}

export default PostCard;

// parseInt(17 + dimensions.height/10)
