import "./css/PostPage.css";

import Comment from "./Comment";
import PostButtons from "../Reusable/PostButtons";
import React, { useEffect } from "react";
import Time from "../Reusable/Time";
import TypeComment from "./TypeComment";
import UserCard from "../Profile/UserCard";
import { useState } from "react";
import SortBy from "../Reusable/SortBy";
import PostEdit from "./PostEdit";

function PostPage({ post, profile, baseUrl }) {
  const [comments, setComments] = useState(post.comments);
  const [sort, setSort] = useState("timestamp");

  useEffect(() => {
    console.log(sort)
    const arr = [...comments]
    if (sort === "timestamp") {
      arr.sort((c1, c2) => new Date(c2.timestamp) - new Date(c1.timestamp))
    } else {
      arr.sort((c1, c2) => c2.countVotes[sort] - c1.countVotes[sort]);
    }
    console.log(arr)
    setComments(arr)
  }, [sort]);

  return (
    <div className="postPage">
      {/* <button className="postPage__goBack">
          <RiArrowGoBackFill />
          <span>Go back</span>
        </button> */}
      <div className="postPage__wrapper">
        <div className="postPage__header">
          <h1
            style={{
              margin: "0",
              width: "85%",
              fontSize: "1.7rem",
              fontWeight: "normal",
            }}
          >
            {post.title}
          </h1>
          <Time fontSize={".9rem"} timestamp={post.timestamp} />
        </div>

        {post.type === "IMAGE" ? (
          <img src={post.content} alt="" />
        ) : post.type === "VIDEO" ? (
          <div className="video">
            <iframe
              src={post.content}
              title="video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ) : post.type === "TEXT" ? (
          <p style={{ padding: "0px 30px" }}>{post.content}</p>
        ) : null}
        <div className="postPage__buttons">
          <PostButtons
            size={"1.4rem"}
            commentsLength={comments.length}
            countVotes={post.countVotes}
            userVoteType={post.userVoteType}
            entityType="posts"
            entityId={post.id}
            visibility={post.visibility}
          />
        </div>

        <div className="postPage__comments">
          <div className="postPage__comments--header">
            <h3 style={{ margin: "0", color: "#4E4E6A" }}>Comments</h3>
            <SortBy setSort={setSort} noCommentsOption={true} />
          </div>
          <TypeComment
            comments={comments}
            setComments={setComments}
            postId={post.id}
          />
          {comments.map((comment) => (
            <Comment
              imgUrl={`${baseUrl}/images/${comment.account.username}/profilepic`}
              displayName={comment.account.displayName}
              username={comment.account.username}
              content={comment.content}
              countVotes={comment.countVotes}
              userVoteType={comment.userVoteType}
              key={comment.id}
              timestamp={comment.timestamp}
              entityId={comment.id}
            />
          ))}
        </div>
      </div>
      <div className="postPage__side">
        <UserCard
          description={profile.description}
          imgUrl={`${baseUrl}/images/${profile.account.username}/profilepic`}
          displayName={profile.account.displayName}
          username={profile.account.username}
          numberFollowers={profile.numberFollowers}
          numberFollowing={profile.numberFollowing}
        />
        <PostEdit username={profile.account.username} postId={post.id} />
      </div>
    </div>
  );
}

export default PostPage;
