import "./css/Profile.css";

import React, { useContext, useState } from "react";

import { AuthContext } from "../Hooks/Auth/AuthContext";
import LoadingSpinner from "../Components/Reusable/LoadingSpinner";
import UserPosts from "../Components/Profile/UserPosts";
import UserProfile from "../Components/Profile/UserProfile";
import { useEffect } from "react";
import useFetch from "../Hooks/Fetch/useFetch";
import { useParams } from "react-router-dom";

function Profile() {
  const { baseUrl } = useContext(AuthContext);
  const callEndpoint = useFetch(AuthContext);
  const params = useParams();

  // console.log(params.username)

  const [loading, setLoading] = useState(true); // without load reading undefined causes app to crash

  const [response, setResponse] = useState({});
  const profilePicUrl = `${baseUrl}/images/${params.username}/profilepic`;
  const backgroundUrl = `${baseUrl}/images/${params.username}/background`;

  useEffect(() => {
    setLoading(true);
    profileDataCall();
  }, [params]); // two calls were being made because of useState (auto import caused problem)

  async function profileDataCall() {
    const { res } = await callEndpoint(
      `/accounts/${params.username}/profile`,
      "GET",
      undefined,
      "application/JSON"
    );
    console.log(res);
    setResponse(res);
    setLoading(false);
  }

  return (
    <div className="profile">
      {!loading ? (
        <>
          <UserProfile
            profile={response.profile}
            profilPicUrl={profilePicUrl}
            backgroundUrl={backgroundUrl}
            followStatus={response.followStatus}
            friendStatus={response.friendStatus}
            stats={response.stats}
            friends={response.friends}
            activityComments={response.activityComments}
          />
          <UserPosts posts={response.posts} profilePicUrl={profilePicUrl} />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default Profile;
