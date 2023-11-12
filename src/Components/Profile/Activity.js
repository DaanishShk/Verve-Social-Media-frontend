import "./css/Pinned.css";

import ActivityComment from "./ActivityComment";
import ActivityLinks from "./ActivityLinks";
import { AiFillStar } from "react-icons/ai";
import { AuthContext } from "../../Hooks/Auth/AuthContext";
import React from "react";
import { useContext } from "react";

function Activity({ activityComments, links }) {
  const { baseUrl } = useContext(AuthContext);

  return (
    <div className="pinned">
      <div className="pinned__title">
        <AiFillStar className="pinned__title--icon" />
        <h3>Activity</h3>
      </div>
      <div className="pinned__posts">
        {activityComments.map((comment) => (
          <ActivityComment
            profilePicUrl={`${baseUrl}/images/${comment.account.username}/profilepic`}
            displayName={comment.account.displayName}
            username={comment.account.username}
            content={comment.content}
            postId={comment.postId}
            key={comment.id}
            isClickable={comment.isClickable}
          />
        ))}
        {Object.keys(links).length !== 0 ? (
          <ActivityLinks links={links} />
        ) : null}
      </div>
    </div>
  );
}

export default Activity;
