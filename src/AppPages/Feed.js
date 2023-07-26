import "./css/Feed.css";

import { useEffect, useState } from "react";

import { AuthContext } from "../Hooks/Auth/AuthContext";
import FeedHeader from "../Components/Feed/FeedHeader";
import FeedPosts from "../Components/Feed/FeedPosts";
import LoadingSpinner from "../Components/Reusable/LoadingSpinner";
import React from "react";
import useFetch from "../Hooks/Fetch/useFetch";

function Feed() {
  const callEndpoint = useFetch(AuthContext);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [tab, setTab] = useState("Public");
  const [refresh, setRefresh] = useState(false);
  const [view, setView] = useState("card");
  const [sort, setSort] = useState("timestamp");

  useEffect(() => {
    setLoading(true);
    getPosts();
  }, [tab, refresh, sort]);

  async function getPosts() {
    const { res } = await callEndpoint(
      `/posts?tab=${tab.toLowerCase()}&sort=${sort}`,
      "GET",
      undefined,
      "x-www-form-urlencoded"
    );
    setPosts(res);
    setLoading(false);
  }

  return (
    <div className="feed">
      <h1>My Feed</h1>
      <FeedHeader
        tab={tab}
        setTab={setTab}
        refresh={refresh}
        setRefresh={setRefresh}
        view={view}
        setView={setView}
        setSort={setSort}
      />
      {!loading ? (
        <>
          {!posts.length ? (
            <p style={{ textAlign: "center" }}>No posts</p>
          ) : null}
          <FeedPosts posts={posts} view={view} />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default Feed;
