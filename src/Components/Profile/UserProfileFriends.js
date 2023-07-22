import "./css/UserProfileFriends.css";

import { useContext, useState } from "react";

import { AuthContext } from "../../Hooks/Auth/AuthContext";
import ProfilePic from "../Reusable/ProfilePic";
import React from "react";
import useFetch from "../../Hooks/Fetch/useFetch";

function UserProfileFriends({ account, friendStatus, friends }) {
  const callEndpoint = useFetch(AuthContext);
  const { baseUrl } = useContext(AuthContext);
  const [status, setStatus] = useState(friendStatus);

  const handleClick = () => {
    if (status === "Send Request") {
      submitFriendRequest();
    }
  };

  async function submitFriendRequest() {
    const { res } = await callEndpoint(
      "/friends/requests",
      "POST",
      JSON.stringify({ receiver: account }),
      "application/json"
    );
    setStatus("Pending");
  }

  friends = friends.slice(0, 6);

  return (
    <div className="mainSection__friends">
      <div className="mainSection__friends--header">
        <h3>Friends</h3>
        <button onClick={handleClick}>{status}</button>
      </div>

      {friends.length === 0 ? (
        <p>You have no friends in common with {account.displayName}</p>
      ) : (
        <p>
          {friends
            .map((friend) => friend.displayName)
            .reverse()
            .join(", ")}{" "}
          {friends.length === 1 ? "is" : "are"} also friends with{" "}
          {account.displayName}
        </p>
      )}
      <div className="mainSection__friends--pics">
        {friends.map((friend) => (
          <ProfilePic
            size="80px"
            imgUrl={`${baseUrl}/images/${friend.username}/profilepic`}
            key={friend.id}
            username={friend.username}
          />
        ))}
      </div>
    </div>
  );
}

export default UserProfileFriends;
