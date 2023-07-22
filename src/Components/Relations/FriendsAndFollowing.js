import "./css/FriendsAndFollowing.css";

import React, { useEffect } from "react";
import { useContext, useState } from "react";

import { AuthContext } from "../../Hooks/Auth/AuthContext";
import FriendsAndFollowingHeader from "./FriendsAndFollowingHeader";
import FriendsAndFollowingListItem from "./FriendsAndFollowingListItem";
import useFetch from "../../Hooks/Fetch/useFetch";

function FriendsAndFollowing() {
  const { baseUrl } = useContext(AuthContext);
  const callEndpoint = useFetch(AuthContext);
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [tab, setTab] = useState("Friends");

  useEffect(() => {
    setLoading(true);
    getPosts();
  }, [tab]);

  async function getPosts() {
    const { res } = await callEndpoint(
      `/accounts/${tab.toLowerCase()}`,
      "GET",
      undefined,
      "x-www-form-urlencoded"
    );
    console.log(res);
    setList(res);
    setLoading(false);
  }
  return (
    <div className="friendsAndFollowing">
      <FriendsAndFollowingHeader tab={tab} setTab={setTab} />
      <div className="friendsAndFollowing__list">
        {!list.length ? (
          <p style={{ textAlign: "center" }}>Nothing found</p>
        ) : null}
        {list.map((account) => (
          <FriendsAndFollowingListItem
            imgUrl={`${baseUrl}/images/${account.username}/profilepic`}
            displayName={account.displayName}
            username={account.username}
            account={account}
            tab={tab}
            key={account.id}
          />
        ))}
      </div>
    </div>
  );
}

export default FriendsAndFollowing;
