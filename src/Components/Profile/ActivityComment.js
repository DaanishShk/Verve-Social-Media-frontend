import "./css/ActivityComment.css"

import Comment from '../PostPage/Comment';
import { Link } from "react-router-dom";
import React from 'react'

function ActivityComment({profilePicUrl, displayName, username, content, postId, isClickable=true}) {
  // add / or else will get relative address
    return (
      <div className="activityComment">
        <Link
          to={isClickable? `/post/${postId}`: '#'}
          style={{ textDecoration: "none", color: "black" }}
        >
            <Comment
              isVotable={false}
              showTimestamp={false}
              imgUrl={profilePicUrl}
              displayName={displayName}
              content={content}
              username={username}
              isPicClikable={false}
            />
        </Link>
      </div>
    );
}

export default ActivityComment
