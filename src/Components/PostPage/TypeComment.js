import "./css/TypeComment.css";

import React, { useContext } from "react";

import { AuthContext } from "../../Hooks/Auth/AuthContext";
import ProfilePic from "../Reusable/ProfilePic";
import { RiSendPlaneFill } from "react-icons/ri";
import useFetch from "../../Hooks/Fetch/useFetch";
import { useState } from "react";

function TypeComment({ comments, setComments, postId }) {
  const { baseUrl, user } = useContext(AuthContext);
  const callEndpoint = useFetch(AuthContext);

  const [content, setContent] = useState("");

  const submitHandle = () => {
    sendComment();
  };

  async function sendComment() {
    const { res } = await callEndpoint(
      // do i need await here or are the ones within callEndpoint enough?
      `/posts/${postId}/comments`,
      "POST",
      JSON.stringify({ content }),
      "application/json"
    );
    res.countVotes = { likes: 0, dislikes: 0 };
    setComments([...comments, res]);
    setContent("");
  }

  return (
    <div className="typeComment">
      <ProfilePic
        size="35px"
        imgUrl={`${baseUrl}/images/${user.account.username}/profilepic`}
        isClickable={false}
      />
      <textarea
        name="comment"
        id=""
        placeholder="enter your comment here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={submitHandle}>
        <RiSendPlaneFill />
      </button>
    </div>
  );
}

export default TypeComment;
