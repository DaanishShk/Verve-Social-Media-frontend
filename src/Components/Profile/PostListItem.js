import "./css/PostListItem.css";

import { Link } from "react-router-dom";
import PostButtons from '../Reusable/PostButtons';
import PostHeader from '../Reusable/PostHeader';
import ProfilePostContent from "./ProfilePostContent.js";
import React from 'react';

function PostListItem({post, profilePicUrl, timestamp}) {
    return (
      <div className="postListItem">
        <div className="postListItem__image">
          <Link
            to={`/post/${post.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ProfilePostContent content={post.content} type={post.type} />
          </Link>
        </div>

        <div className="postListItem__info">
          <PostHeader
            imgUrl={profilePicUrl}
            displayName={post.account.displayName}
            username={post.account.username}
            timestamp={timestamp}
          />
          <Link
            to={`/post/${post.id}`}
            style={{
              textDecoration: "none",
              color: "black",
              width: "fit-content",
              display: "block"
            }}
          >
            <h5 >{post.title}</h5>
          </Link>
          <PostButtons
            commentsLength={post.commentsLength}
            countVotes={post.countVotes}
            userVoteType={post.userVoteType}
            entityType={"posts"}
            entityId={post.id}
          />
        </div>
      </div>
    );
}

export default PostListItem
