import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../Hooks/Auth/AuthContext";
import LoadingSpinner from "../Components/Reusable/LoadingSpinner";
import PostPage from "../Components/PostPage/PostPage";
import React from "react";
import useFetch from "../Hooks/Fetch/useFetch";
import { useParams } from "react-router-dom";

function Post() {
  const { baseUrl } = useContext(AuthContext);
  const callEndpoint = useFetch(AuthContext);
  const params = useParams();

  // console.log(params.username)

  const [loading, setLoading] = useState(true); // without load reading undefined causes app to crash

  const [res, setRes] = useState({});
  const profilePicUrl = `${baseUrl}/images/${params.username}/profilepic`;
  const backgroundUrl = `${baseUrl}/images/${params.username}/background`;

  useEffect(() => {
    postDataCall();
  }, []);

  async function postDataCall() {
    const { res } = await callEndpoint(
      `/posts/${params.id}`,
      "GET",
      undefined,
      "application/JSON"
    );
    console.log(res);
    setRes(res);
    setLoading(false);
  }

  return (
    <div className="post">
      {!loading ? (
        <PostPage post={res.post} profile={res.profile} baseUrl={baseUrl} />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default Post;
