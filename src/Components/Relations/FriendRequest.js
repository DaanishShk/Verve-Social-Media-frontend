import "./css/FriendRequest.css";

import { useContext, useState } from "react";

import { AuthContext } from "../../Hooks/Auth/AuthContext";
import PicAndUsername from "../Reusable/PicAndUsername";
import ProfilePic from "../Reusable/ProfilePic";
import React from "react";
import Time from "../Reusable/Time";
import useFetch from "../../Hooks/Fetch/useFetch";

function FriendRequest({
  imgUrl,
  displayName,
  username,
  timestamp,
  requestId,
  friends,
}) {
  const callEndpoint = useFetch(AuthContext);
  const [status, setStatus] = useState("PENDING");
  const { baseUrl } = useContext(AuthContext);

  const handleClick = (requestState) => {
    updateFriendRequest(requestState);
  };

  async function updateFriendRequest(requestState) {
    const res = await callEndpoint(
      "/friends/requests",
      "DELETE",
      JSON.stringify({ id: requestId, requestState }),
      "application/json"
    );
    setStatus("SUBMITTED");
  }

  return (
    <div className="friendRequest">
      <div className="friendRequest__main">
        <div className="friendRequest__header">
          <PicAndUsername
            imgUrl={imgUrl}
            displayName={displayName}
            username={username}
          />
          <Time timestamp={timestamp} fontSize={".8rem"} />
        </div>
        <p>{displayName.split(" ")[0]} has sent you a friend request</p>
        <div className="friendRequest__common">
          <span>
            You have {friends.length} friennds in common with {displayName}
          </span>
          <div className="friendRequest__common--pics">
            {friends.map((friend) => (
              <ProfilePic
                size="30px"
                imgUrl={`${baseUrl}/images/${friend.username}/profilepic`}
                key={friend.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="friendRequest__buttons">
        {status === "PENDING" ? (
          <>
            <button
              className="friendRequest__buttons--accept"
              onClick={() => handleClick("ACCEPTED")}
            >
              ACCEPT
            </button>
            <button
              className="friendRequest__buttons--reject"
              onClick={() => handleClick("REJECTED")}
            >
              REJECT
            </button>
          </>
        ) : (
          <p>Response submitted</p>
        )}
      </div>
    </div>
  );
}

export default FriendRequest;
