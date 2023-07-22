import "./css/Follow.css";

import { AiFillPlusCircle } from "react-icons/ai";
import { AuthContext } from "../../Hooks/Auth/AuthContext";
import React from "react";
import useFetch from "../../Hooks/Fetch/useFetch";
import { useState } from "react";

function Follow({ account, followStatus }) {
  const [follow, setFollow] = useState(followStatus);
  const callEndpoint = useFetch(AuthContext);

  const handleFollow = () => {
    updateFollow();
  };

  async function updateFollow() {
    const { res } = await callEndpoint(
      "/accounts/following",
      "POST",
      JSON.stringify(account),
      "application/json"
    );
    setFollow(res.followStatus);
  }

  return (
    <div className="mainSection__follow">
      <p>{follow}</p>
      <AiFillPlusCircle
        className={`mainSection__${follow.toLowerCase()}--icon`}
        onClick={handleFollow}
      />
    </div>
  );
}

export default Follow;
