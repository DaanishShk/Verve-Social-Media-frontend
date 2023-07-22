import "./css/UserPosts.css";

import CardListToggle from "../Reusable/CardListToggle";
import FeedPosts from "../Feed/FeedPosts";
import React from "react";
import { useState } from "react";

function UserPosts({ posts }) {
  const [view, setView] = useState("list");

  return (
    <div className="userPosts">
      <div className="userPosts__header">
        <h3>Post history</h3>
        <CardListToggle view={view} setView={setView} />
      </div>
      {!posts.length ? <p style={{ textAlign: "center" }}>No posts</p> : null}
      <FeedPosts posts={posts} view={view} />
    </div>
  );
}

export default UserPosts;
