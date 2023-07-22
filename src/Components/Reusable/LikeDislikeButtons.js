import "./css/LikeDislikeButtons.css";

import { FaHeart, FaHeartBroken } from "react-icons/fa";

import { AuthContext } from "../../Hooks/Auth/AuthContext";
import React from "react";
import useFetch from "../../Hooks/Fetch/useFetch";
import { useState } from "react";

function LikeDislikeButtons({
  size,
  countVotes,
  userVoteType,
  entityType,
  entityId,
}) {
  const [vote, setVote] = useState(userVoteType);
  const [likes, setLikes] = useState(countVotes.likes);
  const [dislikes, setDislikes] = useState(countVotes.dislikes);
  const callEndpoint = useFetch(AuthContext);

  const handleClick = (type) => {
    console.log(type);
    if (vote === type) {
      type = "NONE";
    }
    changeCount(type);
    setVote(type);
    callEndpoint(
      `/${entityType}/${entityId}/votes`,
      "POST",
      JSON.stringify({ type }),
      "application/json"
    );
  };

  const changeCount = (type) => {
    if (type === "NONE") {
      vote === "LIKE" ? setLikes(likes - 1) : setDislikes(dislikes - 1);
    } else if (type === "LIKE") {
      setLikes(likes + 1);
      vote === "DISLIKE" ? setDislikes(dislikes - 1) : setDislikes(dislikes);
    } else {
      setDislikes(dislikes + 1);
      vote === "LIKE" ? setLikes(likes - 1) : setLikes(likes);
    }
  };

  return (
    <div className="postButtons__left likeDislikeButtons">
      <div
        className={
          "postButtons__like" +
          (vote !== "LIKE" ? " likeDislikeButton__inactive" : "")
        }
      >
        <span>{likes}</span>
        <FaHeart
          className="likeDislikeButton"
          style={{ fontSize: size }}
          onClick={() => handleClick("LIKE")}
        />
      </div>
      <div
        className={
          "postButtons__dislike" +
          (vote !== "DISLIKE" ? " likeDislikeButton__inactive" : "")
        }
      >
        <FaHeartBroken
          className="likeDislikeButton"
          style={{ fontSize: size }}
          onClick={() => handleClick("DISLIKE")}
        />
        <span>{dislikes}</span>
      </div>
    </div>
  );
}

export default LikeDislikeButtons;
