import "./css/FriendsAndFollowingListItem.css";

import { AuthContext } from "../../Hooks/Auth/AuthContext";
import PicAndUsername from "../Reusable/PicAndUsername";
import React from "react";
import useFetch from "../../Hooks/Fetch/useFetch";
import { useState } from "react";

function FriendsAndFollowingListItem({
  imgUrl,
  displayName,
  username,
  account,
  tab,
}) {
  const callEndpoint = useFetch(AuthContext);
  const [removed, setRemoved] = useState(false);

  const handleRemove = () => {
    removeFromList();
  };

  async function removeFromList() {
    const res = await callEndpoint(
      `/accounts/${tab.toLowerCase()}`,
      "DELETE",
      JSON.stringify(account),
      "application/json"
    );
    setRemoved(true);
  }

  return (
    <div className="friendsAndFollowingListItem">
      <PicAndUsername
        imgUrl={imgUrl}
        displayName={displayName}
        username={username}
      />
      {!removed ? (
        <button onClick={handleRemove}>REMOVE</button>
      ) : (
        <p>REMOVED</p>
      )}
    </div>
  );
}

export default FriendsAndFollowingListItem;
