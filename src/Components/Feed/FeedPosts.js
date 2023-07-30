import "./css/FeedPosts.css";

import { AuthContext } from "../../Hooks/Auth/AuthContext";
import PostCard from "./PostCard";
import PostListItem from "../Profile/PostListItem";
import React from "react";
import { useContext } from "react";

function FeedPosts({ posts, view }) {
  const { baseUrl } = useContext(AuthContext);
  const display = view === "card" ? styleCards : styleList;
  return (
    <div className="feedPosts" style={display}>
      {view === "card"
        ? posts.map((post) => (
            <PostCard
              title={post.title}
              content={post.content}
              type={post.type}
              dimensions={post.dimensions}
              profilePicUrl={`${baseUrl}/images/${post.account.username}/profilepic`}
              displayName={post.account.displayName}
              username={post.account.username}
              countVotes={post.countVotes}
              commentsLength={post.commentsLength}
              entityId={post.id}
              userVoteType={post.userVoteType}
              timestamp={post.timestamp}
              key={post.id}
              visibility={post.visibility}
            />
          ))
        : posts.map((post) => (
            <PostListItem
              post={post}
              profilePicUrl={`${baseUrl}/images/${post.account.username}/profilepic`}
              timestamp={post.timestamp}
              key={post.id}
            />
          ))}
    </div>
  );
}

export default FeedPosts;

const styleCards = {
  padding: "20px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 390px)",
  gridAutoRows: "10px",
  justifyContent: "center",
  alignItems: "center",
};

const styleList = {
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  alignItems: "center",
};
