import "./css/PendingRequests.css";

import React, { useEffect } from "react";
import { useContext, useState } from "react";

import { AuthContext } from "../../Hooks/Auth/AuthContext";
import FriendRequest from "./FriendRequest";
import LoadingSpinner from "../Reusable/LoadingSpinner";
import useFetch from "../../Hooks/Fetch/useFetch";

function PendingRequests({refresh}) {
  const { baseUrl } = useContext(AuthContext);
  const callEndpoint = useFetch(AuthContext);
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    setLoading(true);
    getFriendRequests();
  }, [refresh]);

  async function getFriendRequests() {
    const { res } = await callEndpoint(
      "/friends/requests",
      "GET",
      undefined,
      "application/json"
    );
    console.log(res);
    setRequests(res);
    setLoading(false);
  }

  return (
    <div className="pendingRequests">
      {!loading ? (
        <>
          <h3>Pending requests ({requests.length})</h3>
          <div className="pendingRequests__friendRequests">
            {!requests.length ? (
              <p style={{ textAlign: "center" }}>No requests</p>
            ) : null}
            {requests.map((request) => (
              <FriendRequest
                imgUrl={`${baseUrl}/images/${request.friendRequest.sender.username}/profilepic`}
                displayName={request.friendRequest.sender.displayName}
                username={request.friendRequest.sender.username}
                timestamp={request.friendRequest.timestamp}
                requestId={request.friendRequest.id}
                key={request.friendRequest.id}
                friends={request.friends}
              />
            ))}
          </div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default PendingRequests;
