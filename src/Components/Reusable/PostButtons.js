import "./css/PostButtons.css";

import { IoChatbubblesOutline, IoShareSocialOutline } from "react-icons/io5";

import LikeDislikeButtons from "./LikeDislikeButtons";
import React from "react";
import { BiWorld } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import SharePost from "./SharePost";

function PostButtons({
  size,
  commentsLength,
  countVotes,
  userVoteType,
  entityType,
  entityId,
  visibility,
}) {
  return (
    <div className="postButtons" style={{ fontSize: size }}>
      <LikeDislikeButtons
        countVotes={countVotes}
        userVoteType={userVoteType}
        entityType={entityType}
        entityId={entityId}
      />
      <div className="postButtons__right">
        <div className="postButtons__right--comments">
          <span>{commentsLength}</span>
          <IoChatbubblesOutline />
        </div>
        {/* <IoShareSocialOutline /> */}
        <SharePost />
        <div className="postButtons__right--visibility">
          {visibility === "PUBLIC" ? <BiWorld /> : <BsPeopleFill />}
        </div>
      </div>
    </div>
  );
}

export default PostButtons;
