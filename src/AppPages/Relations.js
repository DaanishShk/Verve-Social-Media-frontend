import "./css/Relations.css";

import FriendsAndFollowing from "../Components/Relations/FriendsAndFollowing";
import PendingRequests from "../Components/Relations/PendingRequests";
import React, { useState } from "react";
import { BiRefresh } from "react-icons/bi";

function Relations() {
  const [refresh, setRefresh] = useState(false);
  return (
    <div className="relations">
      <div className="relations__header notifications__header">
        <h1>Relations</h1>
        <BiRefresh
          style={{ fontSize: "2em", color: "#1F6CB0" }}
          className="feedHeader__refresh"
          onClick={() => setRefresh(!refresh)}
        />
      </div>
      <PendingRequests refresh={refresh} />
      <FriendsAndFollowing refresh={refresh} />
    </div>
  );
}

export default Relations;
