import "./css/Comment.css"

import LikeDislikeButtons from "../Reusable/LikeDislikeButtons"
import ProfilePic from "../Reusable/ProfilePic"
import React from 'react'
import Time from "../Reusable/Time"

function Comment({imgUrl, displayName, username, content, countVotes, userVoteType, entityId, timestamp, isVotable=true, showTimestamp=true, isPicClikable=true}) {
    return (
      <div className="comment">
        <ProfilePic size={"35px"} imgUrl={imgUrl} username={username} isClickable={isPicClikable}/>
        <div className="comment__wrapper">
          <div className="comment__header">
            {displayName} 
            {showTimestamp? <Time fontSize={"0.7rem"} timestamp={timestamp}/> : null}
          </div>
          <p>{content}</p>
          {isVotable? <LikeDislikeButtons
            size={"0.85rem"}
            countVotes={countVotes}
            userVoteType={userVoteType}
            entityType={"comments"}
            entityId={entityId}
          />: null}          
        </div>
      </div>
    );
}

export default Comment
